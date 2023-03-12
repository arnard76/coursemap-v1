import os
from pikepdf import Pdf


def pdf_split(filepath, first_page, last_page, output_folder):
    pdf = Pdf.open(filepath)
    new_pdf_fragment = Pdf.new()
    
    for pageCounter in range(first_page,last_page+1):
        page = pdf.pages[pageCounter]
        print(pageCounter)
        new_pdf_fragment.pages.append(page)

    # set the fragment pdf file name
    output_filename = f"{output_folder}/fragment.pdf"
    output_filename = "".join(i for i in output_filename if i not in ":*?<>|")

    # output folder exists
    if not os.path.isdir(os.path.dirname(output_filename)):
        os.makedirs(os.path.dirname(output_filename))

    new_pdf_fragment.save(output_filename)
    print(f"[+] File: {output_filename} saved.")