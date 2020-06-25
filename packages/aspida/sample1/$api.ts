/* eslint-disable */
import { AspidaClient, BasicHeaders } from 'aspida'
import * as ApiTypes from './@types'
import { Methods as Methods0 } from './index'
import { Methods as Methods1 } from './_sampleId.json@number'
import { Methods as Methods2 } from './v1.1'
import { Methods as Methods3 } from './v1.1/2/_hogeId@HogeId/entries.json'
import { Methods as Methods4 } from './v1.1/2/_hogeId@HogeId/test-4'
import { Methods as Methods5 } from './v1.1/2/_hogeId@HogeId/test-4/_fugaId'
import { Methods as Methods6 } from './v1.1/2/_hogeId@HogeId/test-4/fuga aa'
import { Methods as Methods7 } from './v1.1/2/_hogeId@number'
import { Methods as Methods8 } from './v1.1/3.1'
import { Methods as Methods9 } from './v1.1/_articleId.json'
import { Methods as Methods10 } from './v1.1/users/_userId@User[\'id\']'
import { Methods as Methods11 } from './v2.0'

const GET = 'GET'
const POST = 'POST'
const PUT = 'PUT'
const DELETE = 'DELETE'
const PATH0 = '/v1.1'
const PATH1 = '/entries.json'
const PATH2 = '/test-4'
const PATH3 = '/test-4/fuga aa'
const PATH4 = '/v1.1/3.1'
const PATH5 = '/v2.0'
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://example.com/api/' : baseURL).replace(/\/$/, '')

  return {
    _sampleId_json: (val0: number) => {
      const prefix0 = `${prefix}/${val0}.json`

      return {
        get: (option?: { config?: T }) =>
          fetch<Methods1['get']['resBody']>(prefix0, '', GET, option).json(),
        $get: (option?: { config?: T }) =>
          fetch<Methods1['get']['resBody']>(prefix0, '', GET, option).json().then(r => r.body)
      }
    },
    v1_1: {
      $2: {
        _hogeId_0: (val1: ApiTypes.HogeId) => {
          const prefix1 = `${prefix}/${val1}`

          return {
            entries_json: {
              get: (option?: { config?: T }) =>
                fetch<Methods3['get']['resBody']>(prefix1, PATH1, GET, option).json(),
              $get: (option?: { config?: T }) =>
                fetch<Methods3['get']['resBody']>(prefix1, PATH1, GET, option).json().then(r => r.body)
            },
            test_4: {
              _fugaId: (val2: number | string) => {
                const prefix2 = `${prefix1}/${val2}`

                return {
                  get: (option?: { query?: Methods5['get']['query'], config?: T }) =>
                    fetch<Methods5['get']['resBody']>(prefix2, '', GET, option).json(),
                  $get: (option?: { query?: Methods5['get']['query'], config?: T }) =>
                    fetch<Methods5['get']['resBody']>(prefix2, '', GET, option).json().then(r => r.body),
                  post: (option: { body?: Methods5['post']['reqBody'], query: Methods5['post']['query'], config?: T }) =>
                    fetch<Methods5['post']['resBody']>(prefix2, '', POST, option).json(),
                  $post: (option: { body?: Methods5['post']['reqBody'], query: Methods5['post']['query'], config?: T }) =>
                    fetch<Methods5['post']['resBody']>(prefix2, '', POST, option).json().then(r => r.body),
                  put: (option: { query: Methods5['put']['query'], config?: T }) =>
                    fetch<Methods5['put']['resBody']>(prefix2, '', PUT, option).json(),
                  $put: (option: { query: Methods5['put']['query'], config?: T }) =>
                    fetch<Methods5['put']['resBody']>(prefix2, '', PUT, option).json().then(r => r.body),
                  delete: (option: { query: Methods5['delete']['query'], config?: T }) =>
                    fetch<Methods5['delete']['resBody']>(prefix2, '', DELETE, option).json(),
                  $delete: (option: { query: Methods5['delete']['query'], config?: T }) =>
                    fetch<Methods5['delete']['resBody']>(prefix2, '', DELETE, option).json().then(r => r.body)
                }
              },
              fuga_aa: {
                get: (option: { query: Methods6['get']['query'], config?: T }) =>
                  fetch<Methods6['get']['resBody']>(prefix1, PATH3, GET, option).json(),
                $get: (option: { query: Methods6['get']['query'], config?: T }) =>
                  fetch<Methods6['get']['resBody']>(prefix1, PATH3, GET, option).json().then(r => r.body),
                post: (option: { body?: Methods6['post']['reqBody'], query: Methods6['post']['query'], config?: T }) =>
                  fetch<Methods6['post']['resBody']>(prefix1, PATH3, POST, option).json(),
                $post: (option: { body?: Methods6['post']['reqBody'], query: Methods6['post']['query'], config?: T }) =>
                  fetch<Methods6['post']['resBody']>(prefix1, PATH3, POST, option).json().then(r => r.body),
                put: (option: { query: Methods6['put']['query'], config?: T }) =>
                  fetch<Methods6['put']['resBody']>(prefix1, PATH3, PUT, option).json(),
                $put: (option: { query: Methods6['put']['query'], config?: T }) =>
                  fetch<Methods6['put']['resBody']>(prefix1, PATH3, PUT, option).json().then(r => r.body),
                delete: (option: { body: Methods6['delete']['reqBody'], query: Methods6['delete']['query'], config?: T }) =>
                  fetch<Methods6['delete']['resBody']>(prefix1, PATH3, DELETE, option).json(),
                $delete: (option: { body: Methods6['delete']['reqBody'], query: Methods6['delete']['query'], config?: T }) =>
                  fetch<Methods6['delete']['resBody']>(prefix1, PATH3, DELETE, option).json().then(r => r.body)
              },
              get: (option: { query: Methods4['get']['query'], config?: T }) =>
                fetch<void>(prefix1, PATH2, GET, option).send(),
              $get: (option: { query: Methods4['get']['query'], config?: T }) =>
                fetch<void>(prefix1, PATH2, GET, option).send().then(r => r.body),
              post: (option?: { body?: Methods4['post']['reqBody'], query?: Methods4['post']['query'], config?: T }) =>
                fetch<void>(prefix1, PATH2, POST, option).send(),
              $post: (option?: { body?: Methods4['post']['reqBody'], query?: Methods4['post']['query'], config?: T }) =>
                fetch<void>(prefix1, PATH2, POST, option).send().then(r => r.body),
              put: (option?: { query?: Methods4['put']['query'], config?: T }) =>
                fetch<Methods4['put']['resBody']>(prefix1, PATH2, PUT, option).json(),
              $put: (option?: { query?: Methods4['put']['query'], config?: T }) =>
                fetch<Methods4['put']['resBody']>(prefix1, PATH2, PUT, option).json().then(r => r.body),
              delete: (option: { query: Methods4['delete']['query'], config?: T }) =>
                fetch<Methods4['delete']['resBody']>(prefix1, PATH2, DELETE, option).json(),
              $delete: (option: { query: Methods4['delete']['query'], config?: T }) =>
                fetch<Methods4['delete']['resBody']>(prefix1, PATH2, DELETE, option).json().then(r => r.body)
            }
          }
        },
        _hogeId_1: (val3: number) => {
          const prefix3 = `${prefix}/${val3}`

          return {
            get: (option: { query?: Methods7['get']['query'], headers: Methods7['get']['reqHeaders'], config?: T }) =>
              fetch<Methods7['get']['resBody']>(prefix3, '', GET, option).json(),
            $get: (option: { query?: Methods7['get']['query'], headers: Methods7['get']['reqHeaders'], config?: T }) =>
              fetch<Methods7['get']['resBody']>(prefix3, '', GET, option).json().then(r => r.body)
          }
        }
      },
      $3_1: {
        get: (option: { query?: Methods8['get']['query'], headers: Methods8['get']['reqHeaders'], config?: T }) =>
          fetch<Methods8['get']['resBody']>(prefix, PATH4, GET, option).json(),
        $get: (option: { query?: Methods8['get']['query'], headers: Methods8['get']['reqHeaders'], config?: T }) =>
          fetch<Methods8['get']['resBody']>(prefix, PATH4, GET, option).json().then(r => r.body),
        post: (option: { body?: Methods8['post']['reqBody'], query: Methods8['post']['query'], config?: T }) =>
          fetch<Methods8['post']['resBody']>(prefix, PATH4, POST, option, 'URLSearchParams').json(),
        $post: (option: { body?: Methods8['post']['reqBody'], query: Methods8['post']['query'], config?: T }) =>
          fetch<Methods8['post']['resBody']>(prefix, PATH4, POST, option, 'URLSearchParams').json().then(r => r.body)
      },
      _articleId_json: (val4: number | string) => {
        const prefix4 = `${prefix}/${val4}.json`

        return {
          get: (option?: { config?: T }) =>
            fetch<Methods9['get']['resBody']>(prefix4, '', GET, option).json(),
          $get: (option?: { config?: T }) =>
            fetch<Methods9['get']['resBody']>(prefix4, '', GET, option).json().then(r => r.body)
        }
      },
      users: {
        _userId: (val5: ApiTypes.User['id']) => {
          const prefix5 = `${prefix}/${val5}`

          return {
            get: (option: { query: Methods10['get']['query'], headers: Methods10['get']['reqHeaders'], config?: T }) =>
              fetch<Methods10['get']['resBody']>(prefix5, '', GET, option).json(),
            $get: (option: { query: Methods10['get']['query'], headers: Methods10['get']['reqHeaders'], config?: T }) =>
              fetch<Methods10['get']['resBody']>(prefix5, '', GET, option).json().then(r => r.body),
            post: (option: { query: Methods10['post']['query'], config?: T }) =>
              fetch<Methods10['post']['resBody']>(prefix5, '', POST, option).json(),
            $post: (option: { query: Methods10['post']['query'], config?: T }) =>
              fetch<Methods10['post']['resBody']>(prefix5, '', POST, option).json().then(r => r.body)
          }
        }
      },
      get: (option?: { query?: Methods2['get']['query'], config?: T }) =>
        fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH0, GET, option).json(),
      $get: (option?: { query?: Methods2['get']['query'], config?: T }) =>
        fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body)
    },
    v2_0: {
      get: (option: { query: Methods11['get']['query'], headers: Methods11['get']['reqHeaders'], config?: T }) =>
        fetch<Methods11['get']['resBody'], Methods11['get']['resHeaders'], Methods11['get']['status']>(prefix, PATH5, GET, option).text(),
      $get: (option: { query: Methods11['get']['query'], headers: Methods11['get']['reqHeaders'], config?: T }) =>
        fetch<Methods11['get']['resBody'], Methods11['get']['resHeaders'], Methods11['get']['status']>(prefix, PATH5, GET, option).text().then(r => r.body)
    },
    get: (option?: { query?: Methods0['get']['query'], headers?: Methods0['get']['reqHeaders'], config?: T }) =>
      fetch<Methods0['get']['resBody']>(prefix, '', GET, option).formData(),
    $get: (option?: { query?: Methods0['get']['query'], headers?: Methods0['get']['reqHeaders'], config?: T }) =>
      fetch<Methods0['get']['resBody']>(prefix, '', GET, option).formData().then(r => r.body),
    post: (option: { body: Methods0['post']['reqBody'], query: Methods0['post']['query'], headers?: Methods0['post']['reqHeaders'], config?: T }) =>
      fetch<Methods0['post']['resBody']>(prefix, '', POST, option).arrayBuffer(),
    $post: (option: { body: Methods0['post']['reqBody'], query: Methods0['post']['query'], headers?: Methods0['post']['reqHeaders'], config?: T }) =>
      fetch<Methods0['post']['resBody']>(prefix, '', POST, option).arrayBuffer().then(r => r.body),
    put: (option: { query: Methods0['put']['query'], config?: T }) =>
      fetch<Methods0['put']['resBody'], Methods0['put']['resHeaders'], Methods0['put']['status']>(prefix, '', PUT, option).json(),
    $put: (option: { query: Methods0['put']['query'], config?: T }) =>
      fetch<Methods0['put']['resBody'], Methods0['put']['resHeaders'], Methods0['put']['status']>(prefix, '', PUT, option).json().then(r => r.body),
    delete: (option: { query: Methods0['delete']['query'], config?: T }) =>
      fetch<void, Methods0['delete']['resHeaders'], Methods0['delete']['status']>(prefix, '', DELETE, option).send(),
    $delete: (option: { query: Methods0['delete']['query'], config?: T }) =>
      fetch<void, Methods0['delete']['resHeaders'], Methods0['delete']['status']>(prefix, '', DELETE, option).send().then(r => r.body)
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api