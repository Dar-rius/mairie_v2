//ICi se trouve la type de chaque attributs pour les modeles de donnees

//Structure de l'objet Naissance
export type TypeNaissance = {
  numeroDoc: 0,
  Annee: "",
  prenom: "",
  nom: "",
  sexe:'',
  dateNaissance: "",
  heure:'',
  lieuNaissance:'',
  formationSanitaire:'',

  prenomPere:'',
  nomPere:'',
  dateNaissancePere:'',
  lieuNaissancePere:'',
  professionPere:'',
  domicilePere:'',

  prenomMere:'',
  nomMere:'',
  dateNaissanceMere:'',
  lieuNaissanceMere:'',
  professionMere:'',
  domicileMere:'',

  nomDeclarateur:'',
  prenomDeclarateur:'',
  adresseDeclarateur:'',
  numeroIdentification:'',
  jugeAutoNumero:'',
  jugeAutoDate:'',
};

export const ObjectNaissance = {
  numeroDoc: 0,
  Annee: "",
  prenom: "",
  nom: "",
  sexe:'',
  dateNaissance: "",
  heure:'',
  lieuNaissance:'',
  formationSanitaire:'',

  prenomPere:'',
  nomPere:'',
  dateNaissancePere:'',
  lieuNaissancePere:'',
  professionPere:'',
  domicilePere:'',

  prenomMere:'',
  nomMere:'',
  dateNaissanceMere:'',
  lieuNaissanceMere:'',
  professionMere:'',
  domicileMere:'',

  nomDeclarateur:'',
  prenomDeclarateur:'',
  adresseDeclarateur:'',
  numeroIdentification:'',
  jugeAutoNumero:'',
  jugeAutoDate:'',
}

//Structure de l'objet Deces
export type TypeDeces = {
    numeroDoc:0,
    Annee:'',
    dateDeces:'',
    heureDeces:'',
    formationSanitaire:'',
    lieuDeces:'',
    prenom:'',
    nom:'',
    sexe:'',
    dateNaissance:'',
    lieuNaissance:'',
    profession:'',
    domicile:'',
    mari:'',

    nomPere:'',
    prenomPere:'',
    domicilePere:'',
    professionPere:'',

    nomMere:'',
    prenomMere:'',
    domicileMere:'',
    professionMere:'',

    prenomDeclarant:'',
    nomDeclarant:'',
    adresseDeclarateur:'',
    professionDeclarateur:'',
    jugeAutoNumero:'',
    jugeAutoDate:''
}

//Structure de l'objet Deces
export type TypeMariage = {
    numeroDoc: 0,
    Annee:'',
    dateDeclaration:'',
    lieuMariage:'',
    devant:'',
    officierEtat:'',

    prenomEpoux:'',
    nomEpoux:'',
    dateNaissEpoux:'',
    lieuNaissEpoux:'',
    professionEpoux:'',
    domicileEpoux:'',
    residenceEpoux:'',
    epouse:'',

    prenomPereEpoux:'',
    nomPereEpoux:'',
    dateNaissPereEpoux:'',
    lieuNaissPereEpoux:'',
    professionPereEpoux:'',
    domicilePereEpoux:'',

    prenomMereEpoux:'',
    nomMereEpoux:'',
    dateNaissMereEpoux:'',
    lieuNaissMereEpoux:'',
    professionMereEpoux:'',
    domicileMereEpoux:'',

    prenomEpouse:'',
    nomEpouse:'',
    dateNaissEpouse:'',
    lieuNaissEpouse:'',
    professionEpouse:'',
    domicileEpouse:'',
    residenceEpouse:'',
    epoux:'',

    prenomPereEpouse:'',
    nomPereEpouse:'',
    dateNaissPereEpouse:'',
    lieuNaissPereEpouse:'',
    professionPereEpouse:'',
    domicilePereEpouse:'',

    prenomMereEpouse:'',
    nomMereEpouse:'',
    dateNaissMereEpouse:'',
    lieuNaissMereEpouse:'',
    professionMereEpouse:'',
    domicileMereEpouse:'',

    declaration:'',
    dot:'',
    regimeMatrimonial:'',
    dateCelebration:'',
    lieuCelebration:'',
    jugeAutoNumero:'',
    jugeAutoDate:'',

    temoinNom1:'',
    temoinPrenom1:'',
    temoinNumId1:'',

    temoinNom2:'',
    temoinPrenom2:'',
    temoinNumId2:'',

    temoinNom3:'',
    temoinPrenom3:'',
    temoinNumId3:'',

    temoinNom4:'',
    temoinPrenom4:'',
    temoinNumId4:''
} 