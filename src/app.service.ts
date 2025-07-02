import { Injectable } from '@nestjs/common';
import { CacheService } from './cache.service';

@Injectable()
export class AppService {
  constructor(private readonly cache: CacheService) {}

  async getFrases() {
    const key = 'products_all';

    // Intentar obtener datos desde caché
    const cached = await this.cache.get(key);
    if (cached) {
      console.log('******** Desde caché Redis ********');
      return cached;
    }

    console.log('** Consultando datos originales **');
    // Simular consulta a base de datos con retraso
    await new Promise((res) => setTimeout(res, 1500));

    const data = [
      { id: 1, frase: "Cree en ti. Eres más fuerte de lo que imaginas." },
      { id: 2, frase: "No tienes que ver toda la escalera, solo da el primer paso." },
      { id: 3, frase: "Si puedes soñarlo, puedes lograrlo." },
      { id: 4, frase: "El éxito es la suma de pequeños esfuerzos repetidos cada día." },
      { id: 5, frase: "No te compares con los demás, compite contigo misma." },
      { id: 6, frase: "Las grandes cosas nunca vienen de zonas de confort." },
      { id: 7, frase: "A veces, rendirse no es una opción. ¡Es avanzar o avanzar!" },
      { id: 8, frase: "Tu actitud determina tu altitud." },
      { id: 9, frase: "No importa cuántas veces caigas, sino cuántas veces te levantas." },
      { id: 10, frase: "Cada día es una nueva oportunidad para cambiar tu vida." },
      { id: 11, frase: "No estás sola, estás construyendo tu mejor versión." },
      { id: 12, frase: "Los días malos también forman parte del camino al éxito." },
      { id: 13, frase: "A veces, lo que parece el final, es solo un nuevo comienzo." },
      { id: 14, frase: "El dolor es temporal, pero el orgullo de lograrlo es eterno." },
      { id: 15, frase: "Respira. Confía. Avanza." },
      { id: 16, frase: "Apunta a la luna. Si fallas, al menos estarás entre las estrellas." },
      { id: 17, frase: "Hazlo con miedo, pero hazlo." },
      { id: 18, frase: "Los sueños no funcionan a menos que tú trabajes por ellos." },
      { id: 19, frase: "No esperes el momento perfecto. Haz que el momento sea perfecto." },
      { id: 20, frase: "El futuro pertenece a quienes creen en la belleza de sus sueños." }
    ];


    // Guardar datos en caché por 10 segundos
    await this.cache.set(key, data, 10);

    console.log('+++ Guardado en caché +++');
    return data;
  }
}