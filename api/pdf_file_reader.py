from PyPDF2 import PdfReader
import json
from define_topic import define_topic 
import datetime
import os

filename = "example_pdfs/coursebook_S12023.pdf"

with open(filename, "rb") as f:
    r = PdfReader(f)

    # formatting outline into parent topic > children topic 
    outline = []
    last_parent =None
  
    for index, element in enumerate(r.outline):
        # element could be a topic or a sub-topic
        if not type(element)==list:
            last_parent = element
        else: 
            for idx, child in enumerate(element):
                first_page = r.get_destination_page_number(child)
                if index==len(r.outline)-1:
                    last_page = len(r.pages)-1
                elif idx==len(element)-1:
                    if type(r.outline[index+1])==list:
                        if len(r.outline[index+1]) > 0:
                            last_page_dest = r.outline[index+1][0]
                        else:
                            last_page_dest = len(r.pages)-1
                    else:
                        last_page_dest = r.outline[index+1]

                    last_page = r.get_destination_page_number(last_page_dest)

                else:
                    last_page = r.get_destination_page_number(element[idx+1])

                text_for_child_topic=""
                for pageNum in range(first_page, last_page+1):
                    page = r.pages[pageNum] 
                    text_for_child_topic+=page.extract_text()+"\n\n\n\n\n"

                element[idx] = {'name': child['/Title'], "content": text_for_child_topic}


            outline.append({
                'name': last_parent.node['/Title'], 
                'definition': {'simple': define_topic(last_parent.node['/Title'])},
                'childs': element, 
                })

    with open(f'example_output/{os.path.basename(filename).split(".json")[0]}out{str(datetime.datetime.now()).replace(":", "_")}.json', 'w') as outline_file:
        json.dump(outline, outline_file, indent=4)