export class Pattern {
    public static emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    public static passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    public static numericRegex = /^[0-9]+(\.?[0-9]+)?$/;
    public static nameRegex = /^[A-Za-z\s]+$/;
    public static phoneRegex = "^\\d{10}$";
    public static spaceRegex = /^\S+$/g;
    public static videoRegex = /^.*\.(mp4|3gp|ogg|wmv|webm|flv|avi|MPEG)$/
}