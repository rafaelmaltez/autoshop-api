export interface HttpRequest {
  params?: { [key: string]: string }
  body: any
}