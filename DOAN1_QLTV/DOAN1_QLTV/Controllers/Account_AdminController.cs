using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DOAN1_QLTV.Models;

namespace DOAN1_QLTV.Controllers
{
    public class Account_AdminController : Controller
    {
        QuanLyThuVienEntities db = new QuanLyThuVienEntities();        
        
        // GET: Account_Admin
        public ActionResult Index()
        {
            return View(db.Account_Admin.ToList());
        }
    }
}