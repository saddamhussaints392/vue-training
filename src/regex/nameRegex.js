export function nameRegex(name){
    const nameRegex = /^.{3,25}$/;
    return nameRegex.test(name);
}