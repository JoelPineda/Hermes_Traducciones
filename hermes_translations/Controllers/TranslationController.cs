using Microsoft.AspNetCore.Mvc;

namespace hermes_translations.Controllers
{
    public class TranslationController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
