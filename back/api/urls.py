from django.urls import path
from . import views

urlpatterns=[
    ## URLS DASHBOARD
    path('api/dashboard', views.dashboard_view, name="dashboard"),

    ## URLS DES REGISTRES
    path('api/liste-naissance', views.listeNaissances_view, name='listNaissance'),
    path('api/liste-mariage', views.listeMariages_view, name='listMariage'),
    path('api/liste-deces', views.listeDeces_view, name='listDeces'),
    path('api/naissance/<int:numeroDoc>', views.naissance_view, name='naissance'),
    path('api/mariage/<int:numeroDoc>', views.mariage_view, name='mariage'),
    path('api/deces/<int:numeroDoc>', views.deces_view, name='deces'),

    ## URLS DES DECLARATIONS
    path('api/declare-naissance', views.declareNaissance_view, name='declareNaiss'),
    path('api/declare-mariage', views.declareMariage_view, name='declareMariage'),
    path('api/declare-deces', views.declareDeces_view, name='declareDeces'),
    
    ## URLS POUR LES DEMANDES
    path('api/demande-naissance', views.demandeNaissance, name='demandeNaissance'),
    path('api/demande-deces', views.demandeDeces, name="demandeDeces"),
    path('api/demande-mariage', views.demandeMariage, name="demandeMariage"),
    path('api/liste-demande-naissance', views.listeDemandeNaissance, name="listeDemandeNaissance"),
    path('api/liste-demande-deces', views.listeDemandeDeces, name="listeDemandeDeces"),
    path('api/liste-demande-mariage', views.listeDemandeMariage, name="listeDemandeMariage"),
    
    ## URLS POUR LES DOCUMENTS D'IMPRESSION
    path('api/impression-naissance/<int:numeroDoc>', views.imprimeActeNaissance, name='impressionNaissance'),
    path('api/impression-mariage/<int:numeroDoc>', views.imprimeActeMariage ,name='impressionMariage'),
    path('api/impression-deces/<int:numeroDoc>', views.imprimeActeDeces, name='impressionDeces'),
    
    ## URLS POUR UPDATE LES DOCUMENTS
    path('api/update-naissance/<int:numeroDoc>', views.changeNaissance, name='updateNaissance'),
    path('api/update-mariage/<int:numeroDoc>', views.changeMariage ,name='updateMariage'),
    path('api/update-deces/<int:numeroDoc>', views.changeDeces, name='updateDeces'),


]
