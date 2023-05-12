import { CanActivateFn } from '@angular/router';

export const isauthGuard: CanActivateFn = (route, state) => {
  console.log(state.url)
  let isConnected : boolean = (localStorage.getItem("statut") == "true") ? true : false
  if(isConnected)
    return true
  return false
};
