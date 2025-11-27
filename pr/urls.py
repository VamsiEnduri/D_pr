from django.urls import path
from .views import home,about,contact,todo,e,createEmp,getAllEmps
urlpatterns=[
    path("",home,name="home2"),
    path("about/",about,name="about2"),
    path("contact/",contact,name="contact2"),
    path("todo/",todo),
    path("api/employees/add/",e,name="v"),
     path('api/employees/get-all-emps/', getAllEmps, name='getAllEmps'),
     path('api/employees/create/', createEmp, name='createEmp'),
]