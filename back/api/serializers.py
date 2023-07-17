from rest_framework_mongoengine.serializers import  DocumentSerializer
from .collectionsDB import ActeDeces


class TestData(DocumentSerializer):
    class Meta:
        model=ActeDeces
        fields=('numeroDoc', "dateDeces", "nom")