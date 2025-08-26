using Microsoft.AspNetCore.Mvc;

namespace hermes_translations.Controllers
{
    public class NosotrosController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
