# Tabla de posiciones online (Supabase) + deploy en Vercel

El juego puede guardar los puntajes de todos en una base online y mostrar un
**ranking** de "quién llegó más lejos" (más tiempo sobrevivido). Funciona con
[Supabase](https://supabase.com) (gratis) y se publica en [Vercel](https://vercel.com) (gratis).

> El juego funciona perfecto sin esto. Si no configurás Supabase, simplemente no
> aparece la tabla online.

---

## 1. Crear el proyecto en Supabase

1. Entrá a https://supabase.com → **Start your project** → creá una cuenta.
2. **New project**. Elegí nombre, contraseña y región (cerca tuyo). Esperá ~2 min.

## 2. Crear la tabla de puntajes

En el panel de Supabase: **SQL Editor** → **New query** → pegá esto y dale **Run**:

```sql
create table public.scores (
  id          bigint generated always as identity primary key,
  name        text not null,
  time        numeric not null,
  kills       int  not null default 0,
  level       int  not null default 1,
  personaje   text,
  won         boolean default false,
  created_at  timestamptz default now(),
  constraint sane_time check (time >= 0 and time <= 100000),
  constraint name_len  check (char_length(name) between 1 and 24)
);

-- Seguridad: cualquiera puede LEER el ranking e INSERTAR su puntaje,
-- pero nadie puede modificar ni borrar puntajes ajenos.
alter table public.scores enable row level security;

create policy "leer ranking"   on public.scores for select using (true);
create policy "subir puntaje"  on public.scores for insert with check (true);
```

## 3. Copiar tus claves al juego

En Supabase: **Settings** (⚙) → **API**. Copiá:

- **Project URL** → pegalo en `supabase-config.js` como `url`.
- **anon public** key → pegala como `anonKey`.

Tu `supabase-config.js` queda así:

```js
window.SUPABASE_CONFIG = {
  url: 'https://abcdefgh.supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6...',
};
```

> La **anon key** es pública por diseño: es seguro commitearla. NO uses la `service_role`.

Abrí `index.html` y jugá: al perder o ganar se sube tu puntaje y aparece la tabla.
También hay un botón **Tabla de posiciones** en el menú.

---

## 4. Publicarlo en Vercel para que jueguen tus amigos

**Opción rápida (sin Git):**
1. Instalá Node y luego: `npm i -g vercel`
2. En la carpeta del juego: `vercel` (seguí los pasos, login con tu mail).
3. Te da una URL pública. Listo: pasásela a tus amigos.

**Opción con GitHub (recomendada para actualizar fácil):**
1. Subí esta carpeta a un repo de GitHub.
2. En https://vercel.com → **Add New → Project** → importá el repo.
3. **Framework Preset: Other** (es un sitio estático). **Deploy**.
4. Cada vez que hagas `git push`, Vercel actualiza la página sola.

Como es un sitio estático, no hace falta build ni configuración extra.

---

## Notas

- El ranking ordena por **tiempo sobrevivido** (mayor = "llegó más lejos"). El que
  vence al Silbón (min 11) aparece con ✓.
- Es un ranking entre amigos, sin anti-trampa fuerte: el puntaje se envía desde el
  navegador. Para algo casual está perfecto.
- Si querés resetear la tabla: en Supabase, **Table Editor → scores → Delete rows**,
  o `delete from public.scores;` en el SQL Editor.
