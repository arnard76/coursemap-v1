from PyPDF2 import PdfReader
import json
from define_topic import define_topic 
import datetime

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
                child_page = r.get_destination_page_number(child)
                print(child_page, type(child_page))
                page = r.pages[child_page]
                text_for_child_topic = page.extract_text()
                print(text_for_child_topic)
                element[index] = {'name': child['/Title'], "content": text_for_child_topic}


            outline.append({
                'name': last_parent.node['/Title'], 
                'definition': {'simple': define_topic(last_parent.node['/Title'])},
                'childs': element, 
                })

    print(outline)

    with open(f'out{str(datetime.datetime.now()).replace(":", "_")}.json', 'w') as outline_file:
        json.dump(outline, outline_file, indent=4)