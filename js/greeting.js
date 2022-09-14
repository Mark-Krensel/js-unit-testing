function greet(name) {
  if (name === "Dalia") {
    return `Howdy Boss!`;
  } else if (name === "Thomas" || name === "Felix" || name === "Stefan") {
    {
      return `Howdy Coach!`;
    }
  }
  return `Howdy ${name}!`;
}

export { greet };
