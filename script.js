document.addEventListener('DOMContentLoaded', function () {
    const yearSelect = document.getElementById('year');
    const makeSelect = document.getElementById('make');
    const modelSelect = document.getElementById('model');
    const trimSelect = document.getElementById('trim');
    const carInfoDiv = document.getElementById('car-info');
    const engineInfoDiv = document.getElementById('engine-info');
    const mileageInfoDiv = document.getElementById('mileage-info');
    const refreshButton = document.getElementById('refresh-button');
  
    const makeSection = document.getElementById('make-section');
    const modelSection = document.getElementById('model-section');
    const trimSection = document.getElementById('trim-section');
  
    const models = {
      Nissan: ['Z', 'Altima', 'Sentra'],
      Toyota: ['Camry', 'Corolla', 'Prius'],
      Honda: ['Civic', 'Accord', 'CR-V'],
      Ford: ['Mustang', 'Fusion', 'Explorer'],
      Chevrolet: ['Impala', 'Malibu', 'Tahoe']
    };
  
    const trims = {
      Z: ['NISMO', 'Sport'],
      Camry: ['LE', 'SE', 'XLE'],
      Civic: ['LX', 'EX', 'Sport'],
      Mustang: ['GT', 'EcoBoost', 'Shelby'],
      Impala: ['LT', 'Premier', 'LS']
    };
  
    const carDetails = {
        Nissan: {
          Z: {
            NISMO: {
              year: 2022,
              msrp: '$45,000',
              type: 'Coupe',
              doors: 2,
              seats: 4,
              length: '172.5 in',
              width: '72.6 in',
              height: '51.8 in',
              wheelbase: '100.4 in',
              frontTrack: '61.6 in',
              groundClearance: '5.3 in',
              cargoCapacity: '9.6 cu ft',
              curbWeight: '3,350 lbs',
              maxCargoCapacity: '9.6 cu ft',
              grossWeight: '4,000 lbs',
              engine: {
                type: 'V6 Turbo',
                cylinders: 6,
                size: '3.0 L',
                horsepower: 400,
                torqueFtLbs: 350,
                torqueRPM: 6400,
                fuelType: 'Gasoline',
                camType: 'DOHC',
                driveType: 'RWD',
                transmission: '9-speed automatic'
              },
              mileage: {
                fuelTankCapacity: '19 gal',
                combinedMpg: 22,
                epaCityMpg: 19,
                epaHighwayMpg: 25,
                rangeCity: '361 mi',
                rangeHighway: '475 mi'
              }
            },
            Sport: {
              year: 2023,
              msrp: '$40,000',
              type: 'Coupe',
              doors: 2,
              seats: 4,
              length: '172.5 in',
              width: '72.6 in',
              height: '51.8 in',
              wheelbase: '100.4 in',
              frontTrack: '61.6 in',
              groundClearance: '5.3 in',
              cargoCapacity: '9.6 cu ft',
              curbWeight: '3,250 lbs',
              maxCargoCapacity: '9.6 cu ft',
              grossWeight: '3,900 lbs',
              engine: {
                type: 'V6 Turbo',
                cylinders: 6,
                size: '3.0 L',
                horsepower: 300,
                torqueFtLbs: 280,
                torqueRPM: 6000,
                fuelType: 'Gasoline',
                camType: 'DOHC',
                driveType: 'RWD',
                transmission: '6-speed manual'
              },
              mileage: {
                fuelTankCapacity: '19 gal',
                combinedMpg: 23,
                epaCityMpg: 20,
                epaHighwayMpg: 26,
                rangeCity: '380 mi',
                rangeHighway: '494 mi'
              }
            }
          }
        }
      };
        
      const displayResult = () => {
        const year = yearSelect.value;
        const make = makeSelect.value;
        const model = modelSelect.value;
        const trim = trimSelect.value;
      
        if (year && make && model && trim && carDetails[make] && carDetails[make][model] && carDetails[make][model][trim]) {
          const details = carDetails[make][model][trim];
          const engineDetails = details.engine;
          const mileageDetails = details.mileage;
      
          // Display general car info
          carInfoDiv.innerHTML = `
            Year: ${details.year}<br>
            Make: ${make}<br>
            Model: ${model}<br>
            Trim: ${trim}<br>
            MSRP: ${details.msrp}<br>
            Type: ${details.type}<br>
            Doors: ${details.doors}<br>
            Seats: ${details.seats}<br>
            Length: ${details.length}<br>
            Width: ${details.width}<br>
            Height: ${details.height}<br>
            Wheelbase: ${details.wheelbase}<br>
            Front Track: ${details.frontTrack}<br>
            Ground Clearance: ${details.groundClearance}<br>
            Cargo Capacity: ${details.cargoCapacity}<br>
            Curb Weight: ${details.curbWeight}<br>
            Max Cargo Capacity: ${details.maxCargoCapacity}<br>
            Gross Weight: ${details.grossWeight}<br>
          `;
      
          // Display engine info
          engineInfoDiv.innerHTML = `
            Engine Type: ${engineDetails.type}<br>
            Engine Cylinders: ${engineDetails.cylinders}<br>
            Engine Size: ${engineDetails.size}<br>
            Engine Horsepower: ${engineDetails.horsepower} HP<br>
            Engine Torque: ${engineDetails.torqueFtLbs} lb-ft @ ${engineDetails.torqueRPM} RPM<br>
            Engine Fuel Type: ${engineDetails.fuelType}<br>
            Engine Cam Type: ${engineDetails.camType}<br>
            Drive Type: ${engineDetails.driveType}<br>
            Transmission: ${engineDetails.transmission}<br>
          `;
      
          // Display mileage info
          mileageInfoDiv.innerHTML = `
            Fuel Tank Capacity: ${mileageDetails.fuelTankCapacity}<br>
            Combined MPG: ${mileageDetails.combinedMpg}<br>
            EPA City MPG: ${mileageDetails.epaCityMpg}<br>
            EPA Highway MPG: ${mileageDetails.epaHighwayMpg}<br>
            Range City: ${mileageDetails.rangeCity}<br>
            Range Highway: ${mileageDetails.rangeHighway}<br>
          `;
        } else {
          carInfoDiv.innerHTML = '';
          engineInfoDiv.innerHTML = '';
          mileageInfoDiv.innerHTML = '';
        }
      };
        
    const refresh = () => {
      yearSelect.selectedIndex = 0;
      makeSelect.selectedIndex = 0;
      modelSelect.selectedIndex = 0;
      trimSelect.selectedIndex = 0;
  
      makeSection.classList.add('hidden');
      modelSection.classList.add('hidden');
      trimSection.classList.add('hidden');
  
      carInfoDiv.innerHTML = '';
      engineInfoDiv.innerHTML = '';
      mileageInfoDiv.innerHTML = '';
    };
  
    yearSelect.addEventListener('change', () => {
      if (yearSelect.value) {
        makeSection.classList.remove('hidden');
      } else {
        refresh();
      }
      displayResult();
    });
  
    makeSelect.addEventListener('change', () => {
      if (makeSelect.value) {
        modelSelect.innerHTML = '<option value="">Select Model</option>';
        models[makeSelect.value].forEach(model => {
          modelSelect.innerHTML += `<option value="${model}">${model}</option>`;
        });
        modelSection.classList.remove('hidden');
      } else {
        modelSection.classList.add('hidden');
        trimSection.classList.add('hidden');
      }
      displayResult();
    });
  
    modelSelect.addEventListener('change', () => {
      if (modelSelect.value) {
        trimSelect.innerHTML = '<option value="">Select Trim</option>';
        trims[modelSelect.value].forEach(trim => {
          trimSelect.innerHTML += `<option value="${trim}">${trim}</option>`;
        });
        trimSection.classList.remove('hidden');
      } else {
        trimSection.classList.add('hidden');
      }
      displayResult();
    });
  
    trimSelect.addEventListener('change', displayResult);
    refreshButton.addEventListener('click', refresh);
  });
  