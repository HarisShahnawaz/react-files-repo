import conf from "../conf/conf";
import { Client, Account, ID ,Databases,Storage,Query} from "appwrite";

export class Service{
  client = new Client();
  databases;
  bucket;

  constructor(){
     this.client
        .setEndpoint(conf.appwiteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
  }
  async createPost({title, content, slug, featuredImage ,status,userid}){
    try {
        return await this.databases.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
           slug,
           {
            title,
            content,
            featuredImage,
            status,
            userid
           }
        )
    } catch (error) {
            console.log("appwrite service :: createPost :: error", error);
        
    }


  }
  async updatePost(slug,{title, content,  featuredImage ,status,}){
  try {
     await this.databases.updateDocument(
    conf.appwriteDatabaseId,
    conf.appwriteCollectionId,
   slug,    {
    title,
    content,
    featuredImage,          
    status,
   }
     )
  } catch (error) {
            console.log("appwrite service :: createPost :: error", error);
    
  }
  }}


const  service = new Service();
export default service;