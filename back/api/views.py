from django.shortcuts import render, redirect
from .collectionsDB import ActeNaissance, ActeDeces, ActeMariage, Demande_acteDece, Demande_acteMariage, Demande_acteNaissance
from datetime import datetime
from mongoengine import *
from django.contrib.auth import login, authenticate, logout
from mongoengine.queryset.visitor import Q
from .serializers import TestData
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status 
# Create your views here.

#view pour retoruner le user en cas de page qui existe pas
def redirection_root(request):
    return redirect("accueille")

@api_view(['GET'])
def testSerial(request):
    if request.method=="GET":
        data = ActeDeces.objects.all()
        serializer = TestData(data, context={'request':request}, many=True)
        return Response(serializer.data)

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

#views pour l'auth

#view du register
def register_view(request):
    if request.method == "POST":
        form = User_form(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect("dashboard")
        else:
            form = User_form()

    return render(request, "pages/mairie/auth/register.html")


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


#views de l'ensemble des declarations
def allDeclaration_view(request):
    return render(request, "pages/mairie/Dashboard/declaration.html", {})


#view pour les declarations d'acte de naissance
def declarationActeNaissance_view(request):
    #intanciation de la class 
    acteNaiss = ActeNaissance()
    if request.method == "POST":
        #convertir les dates
        dateNaissancePere=request.POST["dateNaissancePere"] 
        truedateNaissancePere=datetime.strptime(dateNaissancePere, "%Y-%m-%d")
        dateNaissanceMere=request.POST["dateNaissanceMere"]
        truedateNaissanceMere=datetime.strptime(dateNaissanceMere, "%Y-%m-%d")

        #On donne les valeurs a tous les attricbuts de la class
        acteNaiss.numeroDoc=request.POST["numeroDoc"]
        acteNaiss.numeroDocSTR=request.POST["numeroDocSTR"]
        acteNaiss.Annee=request.POST["annee"]
        acteNaiss.prenom=request.POST["prenom"]
        acteNaiss.nom=request.POST["nom"]
        acteNaiss.sexe=request.POST["sexe"] 
        acteNaiss.dateNaissance=request.POST["dateNaissance"]
        acteNaiss.heure=request.POST["heure"]
        acteNaiss.lieuNaissance=request.POST["lieuNaissance"]
        acteNaiss.formationSanitaire=request.POST["formationSanitaire"]
        acteNaiss.prenomPere=request.POST["prenomPere"]
        acteNaiss.nomPere=request.POST["nomPere"]
        acteNaiss.dateNaissancePere=truedateNaissancePere
        acteNaiss.lieuNaissancePere=request.POST["LieuNaissancePere"]
        acteNaiss.professionPere=request.POST["professionPere"]
        acteNaiss.domicilePere=request.POST["domicilePere"]
        acteNaiss.prenomMere=request.POST["prenomMere"]
        acteNaiss.nomMere=request.POST["nomMere"]
        acteNaiss.dateNaissanceMere=truedateNaissanceMere
        acteNaiss.lieuNaissanceMere=request.POST["LieuNaissanceMere"]
        acteNaiss.professionMere=request.POST["professionMere"]
        acteNaiss.domicileMere=request.POST["domicileMere"]
        acteNaiss.nomDeclarateur=request.POST["nomDeclarateur"]
        acteNaiss.prenomDeclarateur=request.POST["prenomDeclarateur"]
        acteNaiss.adresseDeclarateur=request.POST["adresseDeclarateur"]
        acteNaiss.numeroIdentification=request.POST["numeroIdentification"]
        acteNaiss.dateDeclaration=request.POST["dateDeclaration"]
        acteNaiss.jugeAutoNumero=request.POST["jugeAutoNumero"]
        acteNaiss.jugeAutoLieu=request.POST["jugeAutoLieu"]
        acteNaiss.jugeAutoDate=request.POST["jugeAutoDate"]
        #on enregistre les valeurs des attributs dans la base ede donnee
        acteNaiss.save()

    return render(request, "pages/mairie/Declaration/actesNaiss.html", {})


#view pour les declarations d'acte de deces
def declarationActeDeces_view(request):
    acteDeces = ActeDeces()
    date = datetime.now()

    if request.method == "POST":
        #convertir les dates
        dateNaissance= request.POST["dateNaissance"] 
        trueDateNaiss= datetime.strptime(dateNaissance, "%Y-%m-%d")
        jugeDate=request.POST["jugeAutoDate"]
        trueJugeDate=datetime.strptime(jugeDate, "%Y-%m-%d")
        acteDeces.numeroDoc=request.POST["numeroDoc"]
        acteDeces.Annee=str(date.year)
        acteDeces.dateDeces=request.POST["dateDeces"]
        acteDeces.heureDeces=request.POST["heureDeces"] 
        acteDeces.formationSanitaire=request.POST["formationSanitaire"] 
        acteDeces.lieuDeces=request.POST["lieuDeces"] 
        acteDeces.prenom=request.POST["prenom"] 
        acteDeces.nom=request.POST["nom"] 
        acteDeces.sexe=request.POST["sexe"]  
        acteDeces.dateNaissance= trueDateNaiss
        acteDeces.lieuNaissance=request.POST["lieuNaissance"] 
        acteDeces.profession=request.POST["profession"] 
        acteDeces.domicile=request.POST["domicile"]
        acteDeces.mari=request.POST["mari"] 
        acteDeces.prenomPere=request.POST["prenomPere"] 
        acteDeces.nomPere=request.POST["nomPere"] 
        acteDeces.professionPere=request.POST["professionPere"] 
        acteDeces.domicilePere=request.POST["domicilePere"] 
        acteDeces.prenomMere=request.POST["prenomMere"] 
        acteDeces.nomMere=request.POST["nomMere"] 
        acteDeces.professionMere=request.POST["professionMere"] 
        acteDeces.domicileMere=request.POST["domicileMere"] 
        acteDeces.nomDeclarateur=request.POST["nomDeclarateur"] 
        acteDeces.prenomDeclarateur=request.POST["prenomDeclarateur"] 
        acteDeces.professionDeclarateur=request.POST["professionDeclarateur"] 
        acteDeces.adresseDeclarateur=request.POST["adresseDeclarateur"] 
        acteDeces.degreParente=request.POST["degreParente"] 
        acteDeces.dateDeclaration=request.POST["dateDeclaration"] 
        acteDeces.heureDeclaration=request.POST["heureDeclaration"] 
        acteDeces.jugeAutoNumero=request.POST["jugeAutoNumero"] 
        acteDeces.jugeAutoDate=trueJugeDate
        acteDeces.save()
    return render (request, "pages/mairie/Declaration/actesDeces.html", {})


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

# view pour afficher la liste l'ensembles des actes de naissance
def listeNaissances_view(request):
    actesNaiss = ActeNaissance.objects.all()

    return render(request,"pages/mairie/Dashboard/registre/certif_naissances.html",{'naissances':actesNaiss})

# view pour afficher la liste l'ensembles des actes de deces
def listeDeces_view(request):
    actesDeces = ActeDeces.objects.all()

    return render(request,"pages/mairie/Dashboard/registre/certif_deces.html",{'deces':actesDeces})

# view pour afficher la liste l'ensembles des actes de mariages
def listeMariages_view(request):
    actesMariage = ActeMariage.objects.all()

    return render(request,"pages/mairie/Dashboard/registre/certif_mariages.html",{'mariages':actesMariage})
    

# views pour afficher les informations d'une personne decede
def acteDece_view(request,numeroDoc):
    acteDece = ActeDeces.objects.get(numeroDoc=numeroDoc)

    return render(request,"pages/mairie/Dashboard/registre/info_dece.html",{'acte_de_dece':acteDece})


# views pour afficher les informations d'une personne mariee
def acteMariages_view(request,numeroDoc):
    acteMariage = ActeMariage.objects.get(numeroDoc=numeroDoc)

    return render(request,"pages/mairie/Dashboard/registre/info_mariage.html",{'acte_de_mariage':acteMariage})

# views pour afficher les informations concernant la naissance 
def acteNaissance_view(request,numeroDoc):
    acteNaissance = ActeNaissance.objects.get(numeroDoc=numeroDoc)

    return render(request,"pages/mairie/Dashboard/registre/info_naissance.html",{'acte_de_naissance': acteNaissance})


#view pour les declarations d'acte de mariage
def declarationActeMariage_view(request):
    acteMariage = ActeMariage()
    date = datetime.now()

    if request.method == "POST":
        #convertir les dates
        dateDeclaration=request.POST["dateDeclaration"] 
        trueDateDeclaration=datetime.strptime(dateDeclaration, "%Y-%m-%d")
        jugeDate=request.POST["jugeAutoDate"]
        trueJugeDate =datetime.strptime(jugeDate, "%Y-%m-%d")

        acteMariage.numeroDoc=request.POST["numeroDoc"]
        acteMariage.Annee=str(date.year)
        acteMariage.dateDeclaration=trueDateDeclaration
        acteMariage.lieuMariage=request.POST["lieuMariage"]
        acteMariage.devant=request.POST["devant"]
        acteMariage.officierEtat=request.POST["officierEtat"]
        acteMariage.prenomEpoux=request.POST["prenomEpoux"]
        acteMariage.nomEpoux=request.POST["nomEpoux"]
        acteMariage.dateNaissEpoux=request.POST["dateNaissEpoux"]
        acteMariage.lieuNaissEpoux=request.POST["lieuNaissEpoux"]
        acteMariage.professionEpoux=request.POST["professionEpoux"]
        acteMariage.domicileEpoux=request.POST["domicileEpoux"]
        acteMariage.residenceEpoux=request.POST["residenceEpoux"]
        acteMariage.epouse=request.POST["epouse"]
        acteMariage.prenomPereEpoux=request.POST["prenomPereEpoux"]
        acteMariage.nomPereEpoux=request.POST["nomPereEpoux"]
        acteMariage.dateNaissPereEpoux=request.POST["dateNaissPereEpoux"]
        acteMariage.lieuNaissPereEpoux=request.POST["lieuNaissPereEpoux"]
        acteMariage.professionPereEpoux=request.POST["professionPereEpoux"]
        acteMariage.domicilePereEpoux=request.POST["domicilePereEpoux"]
        acteMariage.prenomMereEpoux=request.POST["prenomMereEpoux"]
        acteMariage.nomMereEpoux=request.POST["nomMereEpoux"]
        acteMariage.dateNaissMereEpoux=request.POST["dateNaissMereEpoux"]
        acteMariage.lieuNaissMereEpoux=request.POST["lieuNaissMereEpoux"]
        acteMariage.professionMereEpoux=request.POST["professionMereEpoux"]
        acteMariage.domicileMereEpoux=request.POST["domicileMereEpoux"]
        acteMariage.prenomEpouse=request.POST["prenomEpouse"]
        acteMariage.nomEpouse=request.POST["nomEpouse"]
        acteMariage.dateNaissEpouse=request.POST["dateNaissEpouse"]
        acteMariage.lieuNaissEpouse=request.POST["lieuNaissEpouse"]
        acteMariage.professionEpouse=request.POST["professionEpouse"]
        acteMariage.domicileEpouse=request.POST["domicileEpouse"]
        acteMariage.residenceEpouse=request.POST["residenceEpouse"]
        acteMariage.epoux=request.POST["epoux"]
        acteMariage.prenomPereEpouse=request.POST["prenomPereEpouse"]
        acteMariage.nomPereEpouse=request.POST["nomPereEpouse"]
        acteMariage.dateNaissPereEpouse=request.POST["dateNaissPereEpouse"]
        acteMariage.lieuNaissPereEpouse=request.POST["lieuNaissPereEpouse"]
        acteMariage.professionPereEpouse=request.POST["professionPereEpouse"]
        acteMariage.domicilePereEpouse=request.POST["domicilePereEpouse"]
        acteMariage.prenomMereEpouse=request.POST["prenomMereEpouse"]
        acteMariage.nomMereEpouse=request.POST["nomMereEpouse"]
        acteMariage.dateNaissMereEpouse=request.POST["dateNaissMereEpouse"]
        acteMariage.lieuNaissMereEpouse=request.POST["lieuNaissMereEpouse"]
        acteMariage.professionMereEpouse=request.POST["professionMereEpouse"]
        acteMariage.domicileMereEpouse=request.POST["domicileMereEpouse"]
        acteMariage.declaration=request.POST["declaration"]
        acteMariage.dot=request.POST["dot"]
        acteMariage.regimeMatrimonial=request.POST["regimeMatrimonial"]
        acteMariage.dateCelebration=request.POST["dateCelebration"]
        acteMariage.lieuCelebration=request.POST["lieuCelebration"]
        acteMariage.jugeAutoNumero=request.POST["jugeAutoNumero"]
        acteMariage.jugeAutoDate=trueJugeDate
        acteMariage.temoinNom1=request.POST["temoinNom1"]
        acteMariage.temoinPrenom1=request.POST["temoinPrenom1"]
        acteMariage.temoinNumId1=request.POST["temoinNumId1"]
        acteMariage.temoinNom2=request.POST["temoinNom2"]
        acteMariage.temoinPrenom2=request.POST["temoinPrenom2"]
        acteMariage.temoinNumId2=request.POST["temoinNumId2"]
        acteMariage.temoinNom3=request.POST["temoinNom3"]
        acteMariage.temoinPrenom3=request.POST["temoinPrenom3"]
        acteMariage.temoinNumId3=request.POST["temoinNumId3"]
        acteMariage.temoinNom4=request.POST["temoinNom4"]
        acteMariage.temoinPrenom4=request.POST["temoinPrenom4"]
        acteMariage.temoinNumId4=request.POST["temoinNumId4"]
        acteMariage.save()

    return render(request, "pages/mairie/Declaration/actesMariage.html", {})


# partie pour les demandes d'actes pour les utilisateurs
def acceuil_demande(request):
    return render(request,"pages/demandes/home.html")


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


#partie pour voir les demandes d'acte pour l'admin

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