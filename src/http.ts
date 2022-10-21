type DataRequest = {
  image: string,
  brandModel: string,
  year: number,
  plate: string,
  color: string,
}

type ValidHeaders = 'content-type' | 'accept'

type HeadersRquest = {
  [key in ValidHeaders]?: string
}

type OptionsRequest = ({
  method: string
  headers: HeadersRquest,
  body: string
})

const request = (url: string, options?: OptionsRequest) =>
  fetch(url, options)
    .then(r => r.json())
    .catch(e => ({ error: true, message: e.message }))

const createRequest = (method: string) => (url: string, data: DataRequest) => request(url, {
  method,
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify(data)
})

export const get = (url: string) => request(url)
export const post = createRequest('POST')
export const del = createRequest('DELETE')