import urllib.request
import os
import time
opener = urllib.request.build_opener()
url_before = 'https://www.zhihu.com/topic/'
star = 19740000
stop = 19741000

def changeUrl(url, num):
    list_url = url.split('/')
    temp = list_url[-1]
    list_temp = temp.split('.')
    list_temp[0] = str(num)
    temp = '.'.join(list_temp)
    list_url[-1] = temp
    return '/'.join(list_url)

for frequency in range(471):
    if frequency < 471:
        star_stop = stop - star
        frequencys = star_stop * frequency
        stars = star + frequencys
        stops = stop + frequencys
        result = os.system("rasdial VPN 41887 1111")
        time.sleep(2)
        for number in range(stars,stops):
            url_hot = changeUrl(url_before, number)
            url = url_hot + '/hot'
            opener = urllib.request.build_opener()
            try:
                opener.open(url)
                mode = 200
            except:
                urllib.error.HTTPError
                mode = 404
            remainder = (stops - number) / (stops - stars)
            rema = 1-remainder
            print('%.2f%%' % (rema * 100))
            print(url)
            print(mode)
            print(frequency)
            if mode == 200:
                doc=open('out.csv','a')
                print(url,file=doc)
        result = os.system("rasdial /DISCONNECT")
        time.sleep(5)
