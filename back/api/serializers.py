from rest_framework_mongoengine.serializers import  DocumentSerializer
from .collectionsDB import *


class ActeNaisSerializer(DocumentSerializer):
    class Meta:
        model=ActeNaissance
        fields="__all__"

class ActeDecesSerializer(DocumentSerializer):
    class Meta:
        model=ActeDeces
        fields="__all__"


class ActeMariageSerailizer(DocumentSerializer):
    class Meta:
        model=ActeMariage
        fields="__all__"


class DemandeNaisSerializer(DocumentSerializer):
    class Meta:
        model=Demande_acteNaissance
        fields="__all__"


class DemandeDecesSerializer(DocumentSerializer):
    class Meta:
        model=Demande_acteDece
        fields="__all__"


class DemandeMariageSerializer(DocumentSerializer):
    class Meta:
        model=Demande_acteMariage
        fields="__all__"