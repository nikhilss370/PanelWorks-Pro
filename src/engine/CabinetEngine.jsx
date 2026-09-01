
export const defaultWardrobe = {
  width: 2000,
  height: 2400,
  depth: 600,
  doors: 2,
  shelves: 5,
  material: "Walnut"
};

export function snapToWall(x,z){
  if(x>5.5) x=5.5;
  if(x<-5.5) x=-5.5;
  if(z<-4.7) z=-4.7;
  return {x,z};
}
