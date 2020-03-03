import file from "./file";
import article from "./article";
import collector from "./collector";
import doc from "./doc";
import sheatsheet from "./sheatsheet";

const api = Object.assign(file, article, collector,doc,sheatsheet)
export default api
