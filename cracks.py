from PIL import Image
im = Image.open("cracks3.gif")

'''
for i in range(150):
    print(i);
    im.seek(im.tell() + 1)
    #data = list(im.getdata());
    #for x in range(len(data)):
    #    if data[x] != 0:
    #        y = 2
    #im.putdata(data)
    '''

im.save("modified.gif", format='GIF', save_all=True)
