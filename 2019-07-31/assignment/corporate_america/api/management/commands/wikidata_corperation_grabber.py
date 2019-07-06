from urllib.parse import quote

ENDPOINT_URL = 'https://query.wikidata.org/sparql?query='

INSTANCE_OF = 'P31'
SUBCLASS_OF = 'P279'
PARENT_ORG = 'P749'
SUBSIDIARY = 'P355'
ORGNAIZATION_T = 'Q43229'

class WikidataCorperateGrabber:
    def get_val_from_prop(self, wikidataId, wikidataType):
        sparqlQuery = f"""
SELECT ?item ?itemLabel ?itemDescription WHERE {{
	wd:${wikidataId} wdt:${wikidataType} ?item .
	SERVICE wikibase:label {{ bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en" }}
}}"""
        full_url = ENDPOINT_URL + quote(sparqlQuery)
        