import { Location } from "@/app/meta";

export function mapDimensions(id: string) {
    const myElement = document.getElementById(id);
    if (myElement) {
        myElement.removeAttribute('style');

        const computedHeight = window.getComputedStyle(myElement).height;
        const computedWidth = window.getComputedStyle(myElement).width;

        myElement.style.height = computedHeight;
        myElement.style.width = computedWidth;
    }
}

export function mapMargins(child_id: string, parent_id: string, side: 'left' | 'right' | 'left' | 'right', target_id: string) {
    const parent = document.getElementById(parent_id); // Replace 'parent' with the actual ID of your parent div
    const child = document.getElementById(child_id); // Replace 'child' with the actual ID of your flex child element
    const target = document.getElementById(target_id);

    // Get the dimensions of the parent and child elements
    if (parent && child && target) {
        const parentRect = parent.getBoundingClientRect();
        const childRect = child.getBoundingClientRect();

        const leftDistance = childRect.left - parentRect.left; // Distance between child's left side and parent's left side
        const rightDistance = parentRect.right - childRect.right; // Distance between parent's right side and child's right side
        const topDistance = childRect.top - parentRect.top; // Distance between child's top side and parent's top side
        const bottomDistance = parentRect.bottom - childRect.bottom; // Distance between parent's bottom side and child's bottom side
       
        if (side == 'left') {
            console.log(target)
            target.style.marginLeft = `${leftDistance}`;
            console.log(target)
        } else {
            //to be implemented if ever needed 
        }
    }
}


export function parseLocationString(input: string): Location | false {
    try {
      const parts: string[] = input.split(',').map(part => part.trim());

      if (parts.length !== 2) {
        return false;
      }

      const county: string = parts[0]
        .replace(/county/gi, '') 
        .trim()
        .replace(/\s+/g, '+'); 
  
      const state: string = parts[1].replace(/\s+/g, '+');
  
      return { county, state };
    } catch {
      return false;
    }
  }