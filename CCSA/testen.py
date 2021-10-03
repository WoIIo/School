ub = int(input())
mb = int(input())
ue = int(input())
me = int(input())

u1 = ub+mb/60
u2 = ue+me/60

if(ub<18 or ue<21 or ub>ue):print('ongeldige invoer')
else:
    vroeg = (21.5-u1)*2
    laat = (24-u2)*4
    print(vroeg+laat)