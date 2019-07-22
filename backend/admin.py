from django.contrib import admin
from .models import *

# Register your models here.

admin.site.register(Services)
admin.site.register(Workers)
admin.site.register(Users)
admin.site.register(Plans)
admin.site.register(Withdrawals)
admin.site.register(Deposits)
admin.site.register(BitcoinAddress)
