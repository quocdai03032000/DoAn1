using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DOAN1_QLTV.Models;

namespace DOAN1_QLTV.Controllers
{
    public class DauSachController : Controller
    {
        QuanLyThuVienEntities db = new QuanLyThuVienEntities();
        // GET: DauSach
        public ActionResult Index()
        {
            return View(db.DauSaches.ToList());
        }

        [HttpGet]
        public ActionResult LoginSuccess()
        {
            return View(db.DauSaches.ToList());
        }
        
        public ActionResult Details(int id)
        {
            return View(db.DauSaches.Where(s => s.MaDauSach == id).FirstOrDefault());
        }
    }
}