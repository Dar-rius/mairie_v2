from django.urls import path
from . import views

urlpatterns=[
    ## URLS DES REGISTRES
    path('api/liste-naissance', views.listeNaissances_view, name='listNaissance'),
    path('api/liste-mariage', views.listeMariages_view, name='listMariage'),
    path('api/liste-deces', views.listeDeces_view, name='listDeces'),
    path('api/naissance/<int:numeroDoc>', views.naissance_view, name='naissance'),
    path('api/mariage/<int:numeroDoc>', views.mariage_view, name='mariage'),
    path('api/deces/<int:numeroDoc>', views.deces_view, name='deces'),

    ## URLS DES DECLARATIONS
]