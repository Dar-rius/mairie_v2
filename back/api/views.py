from django.shortcuts import render, redirect
from .collectionsDB import ActeNaissance, ActeDeces, ActeMariage, Demande_acteDece, Demande_acteMariage, Demande_acteNaissance
from datetime import datetime
from mongoengine import *
from django.contrib.auth import login, authenticate, logout
from mongoengine.queryset.visitor import Q
from .serializers import *
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status 


## VIEWS DE L'Accueil
#view pour la recherche actes du registre
def searchRegistre_view(request): 
    acteNaiss_seached = ""
    acteDeces_seached = ""
    acteMariage_seached = ""
    if 'q' in request.GET:
        q = request.GET['q']
        searchDoc_q = Q(numeroDoc__icontains=q)
        acteNaiss_seached = ActeNaissance.objects.filter(searchDoc_q)
        acteDeces_seached = ActeDeces.objects.filter(searchDoc_q)
        acteMariage_seached = ActeMariage.objects.filter(searchDoc_q)

    return render(request, "pages/mairie/Dashboard/registre/search.html", {"acteNaiss_search": acteNaiss_seached,
                                                "acteDeces_search": acteDeces_seached,
                                                "acteMariage_search": acteMariage_seached})

#view pour la recherche des demandes
def searchDemande_view(request): 
    demandeNaiss_seached = ""
    demandeDeces_seached = ""
    demandeMariage_seached = ""
    if 'q' in request.GET:
        q = request.GET['q']
        searchDoc_q = Q(numeroDoc__icontains=q)
        demandeNaiss_seached = Demande_acteNaissance.objects.filter(searchDoc_q)
        demandeDeces_seached = Demande_acteDece.objects.filter(searchDoc_q)
        demandeMariage_seached = Demande_acteMariage.objects.filter(searchDoc_q)

    return render(request, "pages/mairie/Dashboard/listeDemande/search.html", {"demandeNaiss_seached": demandeNaiss_seached,
                                                "ademanDeces_seached": demandeDeces_seached,
                                                "demandeMariage_seached": demandeMariage_seached})


## VIEW POUR LES PAGES DE CONNEXION
#View du login
def login_view(request):
    if request.method == "POST":
        form = Login_form(request.POST)
        if form.is_valid():
            email = form.cleaned_data.get("email")
            password = form.cleaned_data.get("password")
            user = authenticate(request, username= email, password=password)
            if user:
                login(request, user)
                return redirect("dashboard")
        else:
            form = Login_form()

    return render(request, "pages/mairie/auth/login.html")

#view pour le logout
def logout_view(request):
    logout(request)
    return redirect("login")


## VIEWS DES DECLARATIONS
#view pour les declarations d'acte de naissance
@api_view(['POST'])
def declareNaissance_view(request):
    if request.method == "POST":
        serializer = ActeNaisSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(status.HTTP_201_CREATED)


#view pour les declarations d'acte de deces
@api_view(['POST'])
def declareDeces_view(request):
    if request.method=='POST':
        serializer=ActeDecesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(status.HTTP_201_CREATED)

#view pour les declarations d'acte de mariage
@api_view(['POST'])
def declareMariage_view(request):
    if request.method=='POST':
        serializer = ActeMariageSerailizer(data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(status.HTTP_201_CREATED)




# view pour le dashboard
def dashboard_view(request):
    acteNaiss=ActeNaissance.objects.all().count()
    acteDeces=ActeDeces.objects.all().count()
    acteMariage=ActeMariage.objects.all().count()
    demandeNaiss=Demande_acteNaissance.objects.all().count()
    demandeDeces=Demande_acteDece.objects.all().count()
    demandeMariage=Demande_acteMariage.objects.all().count()
    return render(request,"pages/mairie/Dashboard/dashbord.html",{
        "acteNaiss": acteNaiss,
        "acteDece": acteDeces,
        "acteMariage": acteMariage,
        "demandeNaiss": demandeNaiss,
        "demandeDeces": demandeDeces,
        "demandeMariage": demandeMariage,
    })



## LISTE DES REGISTRE
# view pour afficher la liste l'ensembles des actes de naissance
@api_view(['GET'])
def listeNaissances_view(request):
    if request.method=="GET":
        actesNaiss = ActeNaissance.objects.all()
        serializer = ActeNaisSerializer(actesNaiss, context={'request':request}, many=True)
        return Response(serializer.data)

# view pour afficher la liste l'ensembles des actes de deces
@api_view(['GET'])
def listeDeces_view(request):
    actesDeces = ActeDeces.objects.all()
    serializer = ActeDecesSerializer(actesDeces, context={'request':request}, many=True)
    return Response(serializer.data)

# view pour afficher la liste l'ensembles des actes de mariages
@api_view(['GET'])
def listeMariages_view(request):
    actesMariage = ActeMariage.objects.all()
    serializer = ActeMariageSerailizer(actesMariage, context={'request':request}, many=True)
    return Response(serializer.data)

    
## DETAILS DES ACTES D'ETAT CIVIL
# views pour afficher les informations d'une personne decede
@api_view(['GET'])
def deces_view(request,numeroDoc):
    try:
        acteDeces = ActeDeces.objects.get(numeroDoc=numeroDoc)
    except acteDeces.DoesNotExit:
        return Response(status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        serializer = ActeDecesSerializer(acteDeces, context={'request':request})
        return Response(serializer.data)


# views pour afficher les informations d'une personne mariee
@api_view(['GET'])
def mariage_view(request,numeroDoc):
    try:
        acteMariage = ActeMariage.objects.get(numeroDoc=numeroDoc)
    except acteMariage.DoesNotFound:
        return Response(status.HTTP_404_NOT_FOUND)        
    if request.method == 'GET':
        serializer = ActeMariageSerailizer(acteMariage, context={'request':request})
        return Response(serializer.data)


# views pour afficher les informations concernant la naissance 
@api_view(['GET'])
def naissance_view(request,numeroDoc):
    try:
        acteNaissance = ActeNaissance.objects.get(numeroDoc=numeroDoc)
    except acteNaissance.DoesNotExist:
        return Response(status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        serializer = ActeNaisSerializer(acteNaissance, context={'request':request})
        return Response(serializer.data)


## FORMULAIRE DES DEMANDES
# ceci est le view pour effectuer une demande d'acte de naissance
def demande_acteNaissance(request):
    acteNaiss=Demande_acteNaissance()
    message="" 
    if request.method == "POST":
        acteNaiss.prenom=request.POST["prenom"]
        acteNaiss.numeroDoc=request.POST["numeroDoc"]
        acteNaiss.nom=request.POST["nom"]
        acteNaiss.prenomPere=request.POST["prenomPere"]
        acteNaiss.nomPere=request.POST["nomPere"]
        acteNaiss.prenomMere=request.POST["prenomMere"]
        acteNaiss.nomMere=request.POST["nomMere"]
        if ActeNaissance.objects.get(numeroDoc = acteNaiss.numeroDoc,prenom = acteNaiss.prenom,nom = acteNaiss.nom,prenomPere = acteNaiss.prenomPere,nomPere = acteNaiss.nomPere,prenomMere = acteNaiss.prenomMere,nomMere = acteNaiss.nomMere,):
            acteNaiss.save()
            return redirect("accueille")
        else:
            message = "Ceci n'existe pas dans le registre"
            acteNaiss()
    
    return render(request,"pages/demandes/demande_acteNaissance.html",{'acteNaiss':acteNaiss, "message": message})


# ceci est le view pour effectuer une demande d'acte de mariage
def demande_acteMariage(request):
    acteMariage = Demande_acteMariage()
    message = ""
    if request.method == "POST":
        acteMariage.prenomEpoux=request.POST["prenomEpoux"]
        acteMariage.numeroDoc=request.POST["numeroDoc"]
        acteMariage.nomEpoux=request.POST["nomEpoux"]
        acteMariage.nomEpouse=request.POST["nomEpouse"]
        acteMariage.prenomEpoux=request.POST["prenomEpoux"]
        acteMariage.prenomEpouse=request.POST["prenomEpouse"]
        if ActeMariage.objects.get(numeroDoc = acteMariage.numeroDoc, prenomEpoux = acteMariage.prenomEpoux, nomEpoux = acteMariage.nomEpoux, prenomEpouse = acteMariage.prenomEpouse, nomEpouse = acteMariage.nomEpouse):
            acteMariage.save()
            return redirect("accueille")
        else:
            message = "Ceci n'existe pas dans le registre"
            acteMariage()
    
    return render(request,"pages/demandes/demande_acteMariage.html",{'acteMariage':acteMariage, 'message': message})


# ceci est le view pour effectuer une demande d'acte de dece
def demande_acteDece(request):
    acteDece = Demande_acteDece()
    message = ""
    if request.method == "POST":
        acteDece.prenom = request.POST["prenom"]
        acteDece.nom = request.POST["nom"]
        acteDece.numeroDoc =request.POST["numeroDoc"]
        if ActeDeces.objects.get(numeroDoc = acteDece.numeroDoc,prenom = acteDece.prenom,nom = acteDece.nom) :
            acteDece.save()
            return redirect("accueille")
        else:
            message = "Ceci n'existe pas dans le registre"
            acteDece()

    return render(request,"pages/demandes/demande_acteDeces.html",{'acteDece':acteDece, "message": message})



##LISTE DES DEMANDES D'ACTES D'ETAT CIVIL
# celui la c'est pour la liste des demandes de naissance
def listeDemandeNaissance(request):
    demandeNaissance = Demande_acteNaissance.objects.all()

    return render(request,"pages/mairie/Dashboard/listeDemande/listeDemandeNaissance.html",{'naissances':demandeNaissance})

# celui ci pour les demandes de d'acte mariages
def listeDemandeMariage(request):
    demandeMariage = Demande_acteMariage.objects.all()

    return render(request,"pages/mairie/Dashboard/listeDemande/listeDemandeMariage.html",{'mariages':demandeMariage})

# celui la pour les demandes de d'acte dece
def listeDemandeDece(request):
    demandeDece = Demande_acteDece.objects.all()

    return render(request,"pages/mairie/Dashboard/listeDemande/listeDemandeDece.html",{'Deces':demandeDece})


## DETAILS SUR LES DEMANDES
# la view c'est pour afficher les informations concernant une demande d'acte de naissance
def demandeNaissance(request,numeroDoc):
    demande = Demande_acteNaissance.objects.get(numeroDoc=numeroDoc)

    return render(request,"pages/mairie/Dashboard/listeDemande/demandeNaissance.html",{'acte':demande})

# pour afficher les infos concernant une demande d'acte de mariage
def demandeMariage(request,numeroDoc):
    demande = Demande_acteMariage.objects.get(numeroDoc=numeroDoc)

    return render(request,"pages/mairie/Dashboard/listeDemande/demandeMariage.html",{'acte':demande})

# pour afficher les infos concernants une demande d'acte de dece
def demandeDece(request,numeroDoc):
    demande = Demande_acteDece.objects.get(numeroDoc=numeroDoc)

    return render(request,"pages/mairie/Dashboard/listeDemande/demandeDece.html",{'acte':demande})


## IMPRESSIONS DES DOCUMENTS A IMPRIMER
#view du doc de l'acte de naissance a imprimer 
def imprimeActeNaissance(request, numeroDoc):
    acteNaissanceData = ActeNaissance.objects.get(numeroDoc = numeroDoc)
    demandeNaissance = Demande_acteNaissance.objects.get(numeroDoc = numeroDoc)
    return render(request, "docs/acteNaissance.html", {"acteNaiss": acteNaissanceData, 
                                                        "demandeNaiss": demandeNaissance})


#view du doc de l'acte de deces a imprimer 
def imprimeActeDeces(request, numeroDoc):
    acteDecesData = ActeDeces.objects.get(numeroDoc = numeroDoc)
    demandeDeces = Demande_acteDece.objects.get(numeroDoc = numeroDoc)
    return render(request, "docs/acteDeces.html", {"acteDeces": acteDecesData,
                                                    "demandeDeces": demandeDeces})


#view du doc de l'acte de mariage a imprimer 
def imprimeActeMariage(request, numeroDoc):
    acteMariageData = ActeMariage.objects.get(numeroDoc = numeroDoc)
    demandeMariage = Demande_acteMariage.objects.get(numeroDoc = numeroDoc)
    return render(request, "docs/acteMariage.html", {"acteMariage": acteMariageData,
                                                        "demandeMariage": demandeMariage})