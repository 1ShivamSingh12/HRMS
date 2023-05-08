export interface Route {
  path?:string
  fullurl?:any
}

export  interface NavBarItem {
  title:any,
  logo:string,
  link?:any,
  isActive:boolean,
  show?:boolean,
  options?:Array<subMenuItem>

}

interface subMenuItem{
  subTitle?:string,
  link?:string,
  subLogo?:string
}

