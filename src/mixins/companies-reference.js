/**
 * This mixin provides a reference for the structured data in @/data/companies.json
 */

 export default {
   data () {
     return {
       /**
        * It should be noted that the subCategoryTypes pertain to categories, or the tab element present in each popup. These categories are defined in App.vue and used in the data () function.
        */

       /**
        * These define the menu items under each tab
        */
       subCategoryTypes: {
         "1": "Wages, Benefits, Contracts",
         "2": "Grievance Mechanism",
         "3": "Anti-Discrimination & Harassment",
         "4": "Prevention of Underage & Forced Labor",
         "5": "Freedom of Association & Collective Bargaining"
       },
       /**
        * These define the points that pertain to each subcategory type
        */
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
       /**
        * A dictionary for the rating types
        */
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
