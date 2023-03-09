from PyPDF2 import PdfReader, PdfWriter
import json
filename = "coursebook_S12023.pdf"

with open(filename, "rb") as f:
    r = PdfReader(f)

    # formatting outline into parent topic > children topic 
    outline = []
    last_parent =None
    for index, element in enumerate(r.outline):
        # element could be a topic or a sub-topic
        if index%2==0:
            last_parent = element
        else: 
            for index, child in enumerate(element):
                element[index] = child['/Title']
            outline.append({'name': last_parent.node['/Title'], 'childs': element})

    print(outline)

    with open('out.json', 'w') as outline_file:
        json.dump(outline, outline_file)