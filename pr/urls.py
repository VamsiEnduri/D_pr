from django.urls import path
from .views import e,createEmp,getAllEmps
urlpatterns=[
    path("api/employees/add/",e,name="v"),
    path("api/employees/get-all-emps",getAllEmps,name="getAllEmps"),
    #  path('api/employees/get-all-emps/', getAllEmps, name='getAllEmps'),
    path('api/employees/create/', createEmp, name='createEmp'),
]