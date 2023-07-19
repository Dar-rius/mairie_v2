from django.shortcuts import render, redirect
from .collectionsDB import ActeNaissance, ActeDeces, ActeMariage, Demande_acteDece, Demande_acteMariage, Demande_acteNaissance
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
        serializer = ActeMariageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status.HTTP_201_CREATED)

##  UPDATE DECLARATION
@api_view(['PUT'])
def changeNaissance(request, numeroDoc):
    try:
        acteNaiss = ActeNaissance.objects.get(numeroDoc=numeroDoc)
    except acteNaiss.DoesNotExist:
        return Response(status.HTTP_404_NOT_FOUND)
    if request.method == "PUT":
        serializer = ActeNaisSerializer(acteNaiss, data=request.data, context={'request':request})
        if serializer.is_valid():
            serializer.save()
            return Response(status.HTTP_204_NO_CONTENT)
        return Response(serializer.error, status=status.HTTP_400_BAD_REQUEST)


#view pour les declarations d'acte de deces
@api_view(['PUT'])
def changeDeces(request, numeroDoc):
    try:
        data = ActeDeces.objects.get(numeroDoc=numeroDoc)
    except data.DoesNotExist:
        return Response(status.HTTP_404_NOT_FOUND)
    if request.method == "PUT":
        serializer = ActeDecesSerializer(data, data=request.data, context={'request':request})
        if serializer.is_valid():
            serializer.save()
            return Response(status.HTTP_204_NO_CONTENT)
        return Response(serializer.error, status=status.HTTP_400_BAD_REQUEST)

#view pour les declarations d'acte de mariage
@api_view(['PUT'])
def changeMariage(request, numeroDoc):
    try:
        data = ActeMariage.objects.get(numeroDoc=numeroDoc)
    except data.DoesNotExist:
        return Response(status.HTTP_404_NOT_FOUND)
    if request.method == "PUT":
        serializer = ActeMariageSerializer(data, data=request.data, context={'request':request})
        if serializer.is_valid():
            serializer.save()
            return Response(status.HTTP_204_NO_CONTENT)
        return Response(serializer.error, status=status.HTTP_400_BAD_REQUEST)


# view pour le dashboard
@api_view(['GET'])
def dashboard_view(request):
    acteNaiss=ActeNaissance.objects.all().count()
    acteDeces=ActeDeces.objects.all().count()
    acteMariage=ActeMariage.objects.all().count()
    return Response({
        "count_naiss": acteNaiss,
        "count_mariage": acteMariage,
        "count_deces": acteDeces
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
    serializer = ActeMariageSerializer(actesMariage, context={'request':request}, many=True)
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
    except acteMariage.DoesNotExist:
        return Response(status.HTTP_404_NOT_FOUND)        
    if request.method == 'GET':
        serializer = ActeMariageSerializer(acteMariage, context={'request':request})
        return Response(serializer.data)


# views pour afficher les informations concernant la naissance 
@api_view(['GET'])
def naissance_view(request,numeroDoc):
    try:
        acteNaissance = ActeNaissance.objects.get(numeroDoc=numeroDoc)
    except acteNaissance.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        serializer = ActeNaisSerializer(acteNaissance, context={'request':request})
        return Response(serializer.data)
    print(serializer.errors)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

## FORMULAIRE DES DEMANDES
# ceci est le view pour effectuer une demande d'acte de naissance
@api_view(['POST'])
def demandeNaissance(request):
    if request.method == 'POST':
        serializer = DemandeNaisSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
# ceci est le view pour effectuer une demande d'acte de mariage
@api_view(['POST'])
def demandeMariage(request):
    if request.method == 'POST':
        serializer = DemandeMariageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.erros, status=status.HTTP_400_BAD_REQUEST)    

# ceci est le view pour effectuer une demande d'acte de dece
@api_view(['POST'])
def demandeDeces(request):
    if request.method == 'POST':
        serializer = DemandeDecesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)    


##LISTE DES DEMANDES D'ACTES D'ETAT CIVIL
# celui la c'est pour la liste des demandes de naissance
@api_view(["GET"])
def listeDemandeNaissance(request):
    demandeNaissance = Demande_acteNaissance.objects.all()
    serializer = DemandeNaisSerializer(demandeNaissance, context={'request':request}, many=True)
    return Response(serializer.data)

# celui ci pour les demandes de d'acte mariages
@api_view(["GET"])
def listeDemandeMariage(request):
    demandeDeces = Demande_acteDece.objects.all()
    serializer = DemandeDecesSerializer(demandeDeces, context={'request':request}, many=True)
    return Response(serializer.data)

# celui la pour les demandes de d'acte dece
@api_view(["GET"])
def listeDemandeDeces(request):
    demandeMariage = Demande_acteMariage.objects.all()
    serializer = DemandeMariageSerializer(demandeMariage, context={'request':request}, many=True)
    return Response(serializer.data)


## IMPRESSIONS DES DOCUMENTS A IMPRIMER
#view du doc de l'acte de naissance a imprimer 
@api_view(['GET'])
def imprimeActeNaissance(request, numeroDoc):
    try:
        acteNaissance = ActeNaissance.objects.get(numeroDoc=numeroDoc)
    except acteNaissance.DoesNotExist:
        return Response(status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        serializer = ActeNaisSerializer(acteNaissance, context={'request':request})
        return Response(serializer.data)

#view du doc de l'acte de deces a imprimer 
@api_view(['GET'])
def imprimeActeDeces(request, numeroDoc):
    try:
        acteDeces = ActeDeces.objects.get(numeroDoc=numeroDoc)
    except acteDeces.DoesNotExit:
        return Response(status.HTTP_404_NOT_FOUND)
    if request.method=="GET":
        serializer=ActeDecesSerializer(acteDeces, context={'request':request})
    return Response(serializer.data)

#view du doc de l'acte de mariage a imprimer 
@api_view(['GET'])
def imprimeActeMariage(request, numeroDoc):
    try:
        data = ActeMariage.objects.get(numeroDoc=numeroDoc)
    except data.DoesNotExit:
        return Response(status.HTTP_404_NOT_FOUND)
    if request.method=="GET":
        serializer=ActeMariageSerializer(data, context={'request':request})
    return Response(serializer.data)
