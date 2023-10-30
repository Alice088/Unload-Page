type useFetchType = typeof useFetch

// wrap useFetch with configuration needed to talk to our API
export const useAPIFetch: useFetchType = (path, options = {}) => {
  const config = useRuntimeConfig();

  options.baseURL = config.public.apiBase;

  options.server = true;

  if (options.params) {
    options.params = config.public.devToken ? {'dev_token': config.public.devToken, ...options.params} : {...options.params}
  }

  return useFetch(path, options)
}