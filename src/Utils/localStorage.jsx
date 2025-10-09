import { toast } from "react-toastify"


export const getAppData = () => {
    const data = localStorage.getItem('appStorage')
    if(data){
        return JSON.parse(data)
    }else{ return []}
}

export const setAppData = app => {
    
    const appStorage = getAppData()
    const isInstall = appStorage.some(a => a.id === app.id);
    let updateData = []
    if(isInstall) {
         toast.warning(`${app.title} has already install`)
         
    }else{
        updateData = [...appStorage,app]
         localStorage.setItem('appStorage', JSON.stringify(updateData));
         toast.success(`${app.title} is installed successfully`)
    }
    
}


export const deleteAppData = (id) => {
    const appStorage = getAppData();
    const isExist = appStorage.some(a => a.id=== id)

    if(isExist){
        const updateData = appStorage.filter(p => p.id !== id)
        localStorage.setItem('appStorage', JSON.stringify(updateData));
        toast.success('Successfully Uninstall')
    }else{
        toast.warning('App Not found in Localstorage')
    }
}