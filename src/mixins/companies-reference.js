/**
 * This mixin provides a reference for the structured data in @/data/companies.json
 */

 export default {
   data () {
     return {
       subCategoryTypes: {
         "1": "Wages, Benefits, Contracts",
         "2": "Grievance Mechanism",
         "3": "Anti-Discrimination & Harassment",
         "4": "Prevention of Underage & Forced Labor",
         "5": "Freedom of Association & Collective Bargaining"
       },
       pointTypes: {
         "1": {
           "1": "text 1",
           "2": "text 2",
           "3": "text 3"
         },
         "2": {
           "1": "text 1",
           "2": "text 2",
           "3": "text 3"
         },
         "3": {
           "1": "text 1",
           "2": "text 2",
           "3": "text 3"
         },
         "4": {
           "1": "text 1",
           "2": "text 2",
           "3": "text 3"
         },
         "5": {
           "1": "text 1",
           "2": "text 2",
           "3": "text 3"
         }
       },
       ratingTypes: {
         "1": "good",
         "2": "neutral",
         "3": "bad",
         "4": "block"
       },
       indexTypes: {
         "1": "RDR",
         "2": "KTC"
       }

     }
   }
 }
