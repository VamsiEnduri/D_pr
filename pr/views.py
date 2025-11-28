from django.shortcuts import render,redirect
from django.http import HttpResponse,JsonResponse
import json,os
from rest_framework.decorators import api_view 
from rest_framework.response import Response 



DATA_FILE = "pr/static/emps.json"
def home(request):
    return render(request,"app2/home.html")
def read_data():
    with open(DATA_FILE,"r") as f:
       return json.load(f)

def write_data(data):
    with open(DATA_FILE,"w") as f:
        json.dump(data,f,indent=4)

# @api_view(["GET"])
# def getAllEmps(request):
#     if request.method == "GET":
#         emps_data = read_data()  # read your JSON file
#         return JsonResponse(emps_data, safe=False)  # return JSON to fetch
@api_view(["GET"])
def getAllEmps(request):
    if request.method=="GET":
        data=read_data()
        return JsonResponse(data)


def e(request):
    return render(request,"app2/createEmp.html")

@api_view(["POST"])
def createEmp(request):
    if request.method=="POST":
        new_emp=request.POST.dict()
        print(new_emp,"new_emp")

        emps_data=read_data()
        print(emps_data,"empsdata")
        emps_data["employees"].append(new_emp)
        write_data(emps_data)
        return   redirect("v")


        
        # body= json.loads(request.body.decode())
    # return render(request,"app2/createEmp.html")
def readEmp(request):
    pass
def about(request):
    return render(request,"app2/about.html")

def contact(request):
    return render(request,"app2/contact.html")

def todo(request):
    return render(request,"app2/todo.html")

