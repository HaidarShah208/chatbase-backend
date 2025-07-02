class ApiResponse {
  status: any;
  message: string;
  success: boolean;
  data: any;
  constructor(
    status: number,
    data: { user: { [x: string]: any }; token: string } | null,
    message = "Success"
  ) {
    this.status = status;
    this.message = message;
    this.success = status < 400;
    this.data = data;
  }
}

export { ApiResponse };
