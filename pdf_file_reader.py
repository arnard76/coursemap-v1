from PyPDF2 import PdfReader, PdfWriter
filename = "coursebook_S12023.pdf"

with open(filename, "rb") as f:
    r = PdfReader(f)
    
    # bookmarks = list(map(lambda x: (x, r.get_destination_page_number(x)), r.outline))
    print(r.outline)
    # for i, b in enumerate(bookmarks):
        # begin = b[1]
        # end  = bookmarks[i+1][1] if i < len(bookmarks) - 1 else len(r.pages)
        # # print(len(r.pages[begin:end]))
        # name = b[0] + ".pdf"
        # print(f"{name=}: {begin=}, {end=}")
        # with open(name, "wb") as f:
        #     w = PdfWriter(f)
        #     for p in r.pages[begin:end]:
        #         w.add_page(p)
        #     w.write(f)