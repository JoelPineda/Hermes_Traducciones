using hermes_translations.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Net.Mail;

namespace hermes_translations.Controllers
{
    public class ContactController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public IActionResult EnviarCorreo([FromBody] Email email)
        {
            try
            {
                string EmailOrigen = "hermestraducciones844@gmail.com";
                string EmailDestino = "hermestraduccionesjl@gmail.com";
                string Contraseña = "rkqazagvvxaxjtwh";
                MailAddress from = new MailAddress(EmailOrigen, email.email);
                MailAddress to = new MailAddress(EmailDestino, "Hermes Traducciones");

                MailMessage oMailMessage = new MailMessage(from, to);
                oMailMessage.Subject = "Mensaje desde la pagina web";
                oMailMessage.Body = "<div>" +
                                    "<h3>Nombre: " + email.name + "</h3></br>" +
                                    "<h3>Telefono: " + email.phone + "</h3></br>" +
                                    "<h3>Correo: " + email.email + "</h3></br>" +
                                    "<h3>" + email.message + "</h3>" +
                                    "</div>";

                oMailMessage.IsBodyHtml = true;

                SmtpClient oSmtpCliente = new SmtpClient("smtp.gmail.com");
                oSmtpCliente.EnableSsl = true;
                oSmtpCliente.UseDefaultCredentials = false;
                oSmtpCliente.Port = 587;
                oSmtpCliente.Credentials = new System.Net.NetworkCredential(EmailOrigen, Contraseña);

                oSmtpCliente.Send(oMailMessage);

                oSmtpCliente.Dispose();

                return StatusCode(StatusCodes.Status200OK, new { mensaje = "ok" });
            }
            catch (Exception e)
            {
                return StatusCode(StatusCodes.Status400BadRequest);
            }
           
        }
    }
}
