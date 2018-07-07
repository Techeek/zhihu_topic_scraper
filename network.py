import os
import time
localtime = time.asctime(time.localtime(time.time()))
print("当前时间")
print(localtime)
print("开始检测网络状态")
for frequency in range(100):
    net = os.system("ping www.baidu.com")
    if net:
        network = 404
    else:
        network = 200

    if network == 404:
        print("网络错误，正在重新连接VPN")
        result = os.system("rasdial /DISCONNECT")
        time.sleep(5)
        result = os.system("rasdial VPN 41887 1111")
        print("网络修复完毕，系统将在30分钟后重新检测网络")
    if network == 200:
        print("网络正常，系统将在30分钟后重新检测网络")
    time.sleep(1800)
