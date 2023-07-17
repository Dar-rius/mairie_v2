from mongoengine import *

# Connextion a base de donnee dans mongodb
connect(db="registre", host="mongodb+srv://Teratra:#20sen22#@test0.h3t66d9.mongodb.net/registre?retryWrites=true&w=majority", username="Teratra", password="#20sen22#")

#Create your Collection for mongodb here:
SEXE=(
    ("Homme", "Homme"),
    ("Femme", "Femme"),
    ("Pas precisé", "Pas precisé"),
)

#Collection pour les actes de naissances
class ActeNaissance(Document):
    numeroDoc=IntField(default=0)
    numeroDocSTR=StringField(max_length=100)  
    Annee=StringField(max_length=100)
    prenom=StringField(max_length=100)
    nom=StringField(max_length=100)
    sexe=StringField(max_length=100, choices=SEXE, verbose_name=SEXE)
    dateNaissance=StringField(max_length=100)
    heure=StringField(max_length=100)
    lieuNaissance=StringField(max_length=100)
    formationSanitaire=StringField(max_length=100)
    prenomPere=StringField(max_length=100)
    nomPere=StringField(max_length=100)
    dateNaissancePere=DateTimeField()
    lieuNaissancePere=StringField(max_length=50)
    professionPere=StringField(max_length=100)
    domicilePere=StringField(max_length=150)
    prenomMere=StringField(max_length=100)
    nomMere=StringField(max_length=100)
    dateNaissanceMere=DateTimeField()
    lieuNaissanceMere=StringField(max_length=100)
    professionMere=StringField(max_length=100)
    domicileMere=StringField(max_length=150)
    nomDeclarateur=StringField(max_length=100)
    prenomDeclarateur=StringField(max_length=100)
    adresseDeclarateur=StringField(max_length=100)
    numeroIdentification=IntField(default=0)
    dateDeclaration=StringField(max_length=100)
    jugeAutoNumero=StringField(max_length=100)
    jugeAutoLieu=StringField(max_length=100)
    jugeAutoDate=StringField(max_length=100)


#Collection pour les actes de deces
class ActeDeces(Document):
    numeroDoc= IntField(default=0)
    Annee=StringField(max_length=10)
    dateDeces=StringField(max_length=100)
    heureDeces=StringField(max_length=100) 
    formationSanitaire=StringField(max_length=100)
    lieuDeces=StringField(max_length=100)
    prenom=StringField(max_length=100)
    nom=StringField(max_length=100)
    sexe=StringField(max_length=100, choices=SEXE, verbose_name=SEXE)
    dateNaissance=DateTimeField()
    lieuNaissance=StringField(max_length=100)
    profession=StringField(max_length=100)
    domicile=StringField(max_length=100)
    mari=StringField(max_length=100)
    prenomPere=StringField(max_length=100)
    nomPere=StringField(max_length=100)
    professionPere=StringField(max_length=100)
    domicilePere=StringField(max_length=150)
    prenomMere=StringField(max_length=100)
    nomMere=StringField(max_length=100)
    professionMere=StringField(max_length=100)
    domicileMere=StringField(max_length=150)
    nomDeclarant=StringField(max_length=100)
    prenomDeclarant=StringField(max_length=100)
    professionDeclarant=StringField(max_length=100)
    adresseDeclarateur=StringField(max_length=100)
    degreParente=StringField(max_length=50)
    dateDeclaration=StringField(max_length=100)
    heureDeclaration=StringField(max_length=100)
    jugeAutoNumero=IntField(default=0)
    jugeAutoDate=DateTimeField()


#Collection pour les actes de mariage
class ActeMariage(Document):
    numeroDoc= IntField(default=0)
    Annee=StringField(max_length=10)
    dateDeclaration=DateTimeField()
    lieuMariage=StringField(max_length=100)
    devant=StringField(max_length=100)
    officierEtat=StringField(max_length=100)
    prenomEpoux=StringField(max_length=100)
    nomEpoux=StringField(max_length=100)
    dateNaissEpoux=StringField(max_length=100)
    lieuNaissEpoux=StringField(max_length=100)
    professionEpoux=StringField(max_length=100)
    domicileEpoux=StringField(max_length=150)
    residenceEpoux=StringField(max_length=100)
    epouse=StringField(max_length=100)
    prenomPereEpoux=StringField(max_length=100)
    nomPereEpoux=StringField(max_length=100)
    dateNaissPereEpoux=StringField(max_length=100)
    lieuNaissPereEpoux=StringField(max_length=100)
    professionPereEpoux=StringField(max_length=100)
    domicilePereEpoux=StringField(max_length=150)
    prenomMereEpoux=StringField(max_length=100)
    nomMereEpoux=StringField(max_length=100)
    dateNaissMereEpoux=StringField(max_length=100)
    lieuNaissMereEpoux=StringField(max_length=100)
    professionMereEpoux=StringField(max_length=100)
    domicileMereEpoux=StringField(max_length=150)
    prenomEpouse=StringField(max_length=100)
    nomEpouse=StringField(max_length=100)
    dateNaissEpouse=StringField(max_length=100)
    lieuNaissEpouse=StringField(max_length=100)
    professionEpouse=StringField(max_length=100)
    domicileEpouse=StringField(max_length=150)
    residenceEpouse=StringField(max_length=100)
    epoux=StringField(max_length=100)
    prenomPereEpouse=StringField(max_length=100)
    nomPereEpouse=StringField(max_length=100)
    dateNaissPereEpouse=StringField(max_length=100)
    lieuNaissPereEpouse=StringField(max_length=100)
    professionPereEpouse=StringField(max_length=100)
    domicilePereEpouse=StringField(max_length=150)
    prenomMereEpouse=StringField(max_length=100)
    nomMereEpouse=StringField(max_length=100)
    dateNaissMereEpouse=StringField(max_length=100)
    lieuNaissMereEpouse=StringField(max_length=100)
    professionMereEpouse=StringField(max_length=100)
    domicileMereEpouse=StringField(max_length=150)
    declaration=StringField(max_length=100)
    dot=StringField(max_length=100)
    regimeMatrimonial=StringField(max_length=100)
    dateCelebration=StringField(max_length=100)
    lieuCelebration=StringField(max_length=100)
    jugeAutoNumero=StringField(max_length=100)
    jugeAutoDate=DateTimeField()
    temoinNom1=StringField(max_length=100)
    temoinPrenom1=StringField(max_length=100)
    temoinNumId1=IntField(default=0)
    temoinNom2=StringField(max_length=100)
    temoinPrenom2=StringField(max_length=100)
    temoinNumId2=IntField(default=0)
    temoinNom3=StringField(max_length=100)
    temoinPrenom3=StringField(max_length=100)
    temoinNumId3=IntField(default=0)
    temoinNom4=StringField(max_length=100)
    temoinPrenom4=StringField(max_length=100)
    temoinNumId4=IntField(default=0)

# model pour les demandes d'acte de naissance
class Demande_acteNaissance(Document):
    numeroDoc=IntField(default=0,unique=True)
    prenom=StringField(max_lenght=100)
    nom=StringField(max_lenght=100)
    dateNaissance=DateTimeField()
    prenomPere=StringField(max_lenght=100)
    nomPere=StringField(max_lenght=100)
    prenomMere=StringField(max_lenght=100)
    nomMere=StringField(max_lenght=100)

# model pour les demandes d'acte de mariage
class Demande_acteMariage(Document):
    numeroDoc=IntField(default=0,unique=True)
    prenomEpoux=StringField(max_lenght=100)
    nomEpoux=StringField(max_lenght=100)
    dateDeclaration=DateTimeField()
    prenomEpouse=StringField(max_lenght=100)
    nomEpouse=StringField(max_lenght=100)


# model pour les demandes d'acte de dece
class Demande_acteDece(Document):
    numeroDoc=IntField(default=0,unique=True)
    prenom=StringField(max_lenght=100)
    nom=StringField(max_lenght=100)
    dateHeureDeces=DateTimeField()
    prenomPere=StringField(max_lenght=100)
    nomPere=StringField(max_lenght=100)
    prenomMere=StringField(max_lenght=100)
    nomMere=StringField(max_lenght=100)
