import { API } from '../../api'

export const CreateRecipe = {
  template:`
  <div class="flex justify-center pt-16">
		<div class="bg-gray-200 max-w-xl w-full py-10 px-6 rounded-md" >
			<input
			id="inputName"
			type="text"
			class="py-3 px-4 rounded-md w-full mb-4"
			placeholder="Name"
			>

			<input
			id="inputDescription"
			type="text"
			class="py-3 px-4 rounded-md w-full mb-4"
			placeholder="Descripción"
			>
			<input
			id="inputMeasur"
			type="text"
			class="py-3 px-4 rounded-md w-full mb-4"
			placeholder="Measur"
			>
			<input
			id="inpuMeasurUnit"
			type="text"
			class="py-3 px-4 rounded-md w-full mb-4"
			placeholder="MeasurUnit"
			>
			<input
			id="inputKitchen"
			type="text"
			class="py-3 px-4 rounded-md w-full mb-4"
			placeholder="Kitchen"
			>

			<p id="createError" class="text-red-500 font-bold text-xl"></p>
			<p id="createSucces" class="text-green-500 font-bold text-xl"></p>

			<button id="btnCreateFood" class="button" type="button">
			crear
			</button>
			</div>
  </div>
  `,
  methods() {
    const buttonCreate = document.querySelector('#btnCreateFood');
    buttonCreate.addEventListener('click', async(event) => {
      try {
        event.preventDefault();
        const name = document.querySelector('#inputName').value;
        const description = document.querySelector('#inputDescription').value;
        const measur = document.querySelector('#inputMeasur').value;
        const measur_unit = document.querySelector('#inpuMeasurUnit').value;
        const kitchen = document.querySelector('#inputKitchen').value;
        await API.post('/kitchens/recipes', {
          name,
          description,
          measur: Number(measur),
          measur_unit: Number(measur_unit),
          kitchen: Number(kitchen),
        });

        const createSucces = document.querySelector('#createSucces');
        createSuccess.innerHTML = 'Receta Creada con exito';
        setTimeout(() => {
          createSucces.innerHTML = '';
        }, 3000);
      } catch(error){
        const createError = document.querySelector('#createError');
        createError.innerHTML = 'Error al crear la receta';
        setTimeout(() => {
          createError.innerHTML = '';
        }, 300);
      }
  });
  }
}