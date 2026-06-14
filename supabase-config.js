// ============================================================
//  CONEXIÓN A SUPABASE (tabla de posiciones online)
// ============================================================
// Pegá acá los datos de TU proyecto Supabase.
// Los encontrás en: Supabase > tu proyecto > Settings > API
//
//   url     = "Project URL"        (ej: https://abcdefgh.supabase.co)
//   anonKey = "anon public" key    (la clave larga que empieza con eyJ...)
//
// La "anon public key" está pensada para ir en el cliente: es SEGURA de
// publicar/commitear (el acceso real lo controla Row Level Security en
// Supabase). NO pongas acá la "service_role" key.
//
// Si dejás esto vacío, el juego funciona igual pero sin tabla online.
// Pasos completos en SUPABASE_SETUP.md
// ============================================================
window.SUPABASE_CONFIG = {
  url: '',
  anonKey: '',
};
