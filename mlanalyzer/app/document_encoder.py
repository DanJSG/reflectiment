from app.document import Document

def encode_document(doc: Document) -> dict:
    """ Encode a document as a JSON serializable dictionary. 
    
    Encodes a document to a JSON serializable dict containing the document
    text, sentences and each sentences sentiment labels.
    
    Args:
        doc: the document to encode

    Return:
        A dictionary representation of the document
    """
    encoded: dict = {}
    encoded["text"] = doc.text
    encoded_sentences: list = []
    for sentence in doc.sentences:
        sentence_dict: dict = {}
        sentence_dict["text"] = sentence.text
        sentence_dict["label"] = sentence.sentiment
        encoded_sentences.append(sentence_dict)
    encoded["sentences"] = encoded_sentences
    return encoded