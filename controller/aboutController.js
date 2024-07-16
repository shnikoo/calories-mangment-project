//Shani Mirzaye 212355812
//Omer Madhala 207917725

export const getDevelopers = (req, res) => {
    // Array of objects describing developers
    const developers = [
      { "firstname": "Shani", "lastname": "Mirzaye", "id": 212355812, "email": "shanimir2001@gmail.com" },
      { "firstname": "Omer", "lastname": "Madhala", "id": 207917725, "email": "omermadhala181@gmail.com" }
    ];
    res.json(developers);
  };
  