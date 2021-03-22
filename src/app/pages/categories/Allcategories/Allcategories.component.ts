import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from './../../../../../src/environments/environment';
import { FileuploadService } from '../../../../../src/app/_service/fileupload.service';
import { CategoriesService } from '../../../../../src/app/_service/categories.service';
import { AlertifyService } from '../../../../../src/app/_service/alertify.service';
import { categories } from '../../../../../src/app/Models/categories';
import { subcategories } from '../../../../../src/app/Models/subcategories';
import { GetCategoryDto } from '../../../../../src/app/Models/GetCategoryDto';
import { SubcategoreyDto } from '../../../../../src/app/Models/SubcategoreyDto';
@Component({
  selector: 'app-Allcategories',
  templateUrl: './Allcategories.component.html',
  styleUrls: ['./Allcategories.component.scss']
})
export class AllcategoriesComponent implements   OnInit {


  fileData: File = null;
  Id:number;
  previewUrl:any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  form: FormGroup;
  Imageform: FormGroup;
  bannerslist:any;
 
    ImagebaseUrl = environment.Imagebaseurl + 'CategoryImages/';
    CategoriesList:any[];
   categoryname:string;
  subcategoryData:SubcategoreyDto []=[];
  DtoData :GetCategoryDto[];
  subcat:any;
  editIndex: number = null;
  caregoryname:string;
  editSubCategory: number = null;  
  key:string='rowid';
  reverse:boolean=false;
  p:number=1;
  categotyid:number;
  noimage="";
  triggerSubCate:boolean=false;
  subCatEditTrigger:boolean=false;
  categorytrigger:boolean=false;
  progress: number = 0;

  Subcategorieslist:subcategories[];
  subcategoreydata:subcategories;
 

  constructor(private alertify: AlertifyService,private categorymodal:categories,private subcategoreymodal:subcategories,private categoryservice:CategoriesService,private modalService: NgbModal,private uploadfileservice:FileuploadService,private fb:FormBuilder) { 
  }
  ngOnInit() {
    this.Getcategorey();
    this.form = this.fb.group({
    
      avatar: [null]
    })
  }
  fileProgress(fileInput: any, index: number,categoreyId:number,categoreyName:string) {
    var dd=this.CategoriesList.length;
  for (let index1 = 0; index1 < dd; index1++) {
    const element = this.CategoriesList[index1].inedit=false;
    
  }
    this.CategoriesList[index].image = true;
   
    this.CategoryForm.get('categoreyId') .patchValue(Number(categoreyId));
      this.CategoryForm.get('categoreyName') .patchValue(String(categoreyName));
      category_Image: new FormControl(fileInput),
    this.fileData = <File>fileInput.target.files[0];
    this.preview();
}
preview() {
  // Show preview
  var mimeType = this.fileData.type;
  if (mimeType.match(/image\/*/) == null) {
    return;
  }
  
  

  var reader = new FileReader();     
  reader.readAsDataURL(this.fileData);
  reader.onload = (_event) => {
    this.previewUrl = reader.result;
  }
}
CancelImage( index: number)
{
  var categorydisable=this.CategoriesList.length;
    for (let index1 = 0; index < categorydisable; index1++) {
      const element = this.CategoriesList[index].image=false;
      
    }
  this.CategoriesList[index].image = true;
}
onSubmit(id:number) {
 debugger
  const formData = new FormData();
    formData.append("image", this.fileData);
   
    var apipath="UploadImageCategory";

this.uploadfileservice.uploadcategoryimage(this.fileData,apipath,id).subscribe(res => {
 this.Getcategorey();
})
   


}
public formData = new FormData();
ReqJson: any = {};

uploadFiles(event,Id:number ) {
  debugger;
  var data=Id;
  const file = (event.target as HTMLInputElement).files[0];
  this.form.patchValue({
    avatar: file
  });
  this.form.get('avatar').updateValueAndValidity();
  if(this.form.value.avatar!=null){
    var apipath="UploadImageSubCategory";
    
    this.uploadfileservice.uploadcategoryimage(this.form.value.avatar,apipath,Id).subscribe((event: HttpEvent<any>) => {
      window.location.reload();
      this.Getcategorey()
    })
  }
        // this.fileData=file;
        // const formData1 = new FormData();
        //     formData1.append("image",this.fileData);
        //     var apipath="UploadImageCategory";
        //     this.uploadfileservice.uploadcategoryimage(this.fileData,apipath,Id).subscribe(res => {
        //       this.Getcategorey();
        //      })


    }


  Getcategorey(){
    this.categoryservice.GetCategoryData().subscribe((next:any) => {
      debugger;
      this.CategoriesList=next;
      this.DtoData=next;
   this.subcategoryData=this.DtoData.filter(res=>{return res.subcategorey});
   console.log(this.subcategoryData);
      console.log(this.CategoriesList);
    }, error => {
      console.log(error);
    });
  }
  Sort(key){
    this.key=key;
    this.reverse=!this.reverse;
  }
  AddSubCategory(event, index: number,id:number)
  {

      var categorydisable=this.CategoriesList.length;
      for (let index1 = 0; index1 < categorydisable; index1++) {
        const element = this.CategoriesList[index1].inedit=false;
        
      }
      var subcatedisable=this.subcategoryData.length;
      for (let index1 = 0; index1 < subcatedisable; index1++) {
        const element = this.CategoriesList[index1].inedit=false;
        
      }
        
        this.categorytrigger=true;
        this.triggerSubCate= true;
        var data= this.CategoriesList.find(x=>x.category_Id==id);
      this.SubCategoryForm.get('subCategoreyId') .patchValue(0);
          this.SubCategoryForm.get('subcategoreyName') .patchValue('');
          this.SubCategoryForm.get('categoreyId') .patchValue(id);
    }
  Addcategory()
  {
    this.categorytrigger=true;
  }
  UpdateCategory()
  {
  
    this.categoryservice.updatecategory(this.CategoryForm.value).subscribe(next => {
      this.alertify.success('Category Updated');
      this.Getcategorey();
      this.CategoryForm.reset();
      this.categorytrigger= false;
      this.triggerSubCate= false;
      this.modalService.dismissAll();
    
      
    }, error => {
      console.log(error);
    });
  }
  UpdateSubCategory()
  {
  
    this.categoryservice.UpdateSubCategory(this.SubCategoryForm.value).subscribe(next => {
      this.alertify.success('Sub Category Updated');
      this.Getcategorey();
      this.CategoryForm.reset();
      this.categorytrigger= false;
      this.triggerSubCate= false;
      this.modalService.dismissAll();
    
      
    }, error => {
      console.log(error);
    });
  }
  submitcategory()
  {
    
    this.categoryservice.AddCategory(this.CategoryForm.value).subscribe(next => {
      this.alertify.success('New Category Added');
      this.Getcategorey();
      this.CategoryForm.reset();
      this.categorytrigger= false;
      this.triggerSubCate= false;
      this.modalService.dismissAll();
    
      
    }, error => {
      console.log(error);
    });
   
  }
  Cancel()
  {
    var categorydisable=this.CategoriesList.length;
    for (let index1 = 0; index1 < categorydisable; index1++) {
      const element = this.CategoriesList[index1].inedit=false;
      
    }
    var dd=this.CategoriesList.length;
    for (let index1 = 0; index1 < dd; index1++) {
      const element = this.CategoriesList[index1].ineditsub=false;
      
    }
    this.categorytrigger= false;
    this.triggerSubCate= false;

  }
  submitsubcategory()
  {
  
    this.categoryservice.AddSubCategory(this.SubCategoryForm.value).subscribe(next => {
      this.alertify.success('Sub Category Addes');
      this.Getcategorey();
      this.SubCategoryForm.reset();
      this.categorytrigger= false;
      this.triggerSubCate= false;
   
      this.modalService.dismissAll();
    
      
    }, error => {
      console.log(error);
    });
   
  }
 
  CategoryForm:FormGroup=new FormGroup({
    categoreyId: new FormControl(0),
    categoreyName: new FormControl(this.categorymodal.categoreyName),
    category_Image: new FormControl(this.categorymodal.categoreyName),
   });

   SubCategoryForm:FormGroup=new FormGroup({
    subCategoreyId: new FormControl(this.subcategoreymodal.subCategoreyId),
    subcategoreyName: new FormControl(this.subcategoreymodal.subcategoreyName),
    categoreyId: new FormControl(this.subcategoreymodal.categoreyId),
    SubcategoryImage: new FormControl(""),
   });

   onEditClick(event, index: number,id:number) {
  
   var dd=this.CategoriesList.length;
  for (let index1 = 0; index1 < dd; index1++) {
    const element = this.CategoriesList[index1].inedit=false;
    
  }
    this.CategoriesList[index].inedit = true;
   
    this.subcat=this.DtoData.filter(x=>x.categorey.categoreyId==id);
    var categoreyId = this.subcat.map(function(item){return item.categorey.categoreyId;});
    var categoreyName = this.subcat.map(function(item){return item.categorey.categoreyName;});
  this.CategoryForm.get('categoreyId') .patchValue(Number(categoreyId));
      this.CategoryForm.get('categoreyName') .patchValue(String(categoreyName));
    console.log(this.CategoryForm);
  }
  onSubCatEditClick(event, index: number,subcategoryid:number,categoreyid:number,subcategoreyName:string) {
    var dd=this.CategoriesList.length;
    for (let index1 = 0; index1 < dd; index1++) {
      const element = this.CategoriesList[index1].ineditsub=false;
      
    }
    
      this.subCatEditTrigger=true;
      this.CategoriesList[index].ineditsub = true;
     
    this.SubCategoryForm.get('categoreyId') .patchValue(categoreyid);
        this.SubCategoryForm.get('subcategoreyName') .patchValue(subcategoreyName);
        this.SubCategoryForm.get('subCategoreyId') .patchValue(subcategoryid);
   
    }

}
