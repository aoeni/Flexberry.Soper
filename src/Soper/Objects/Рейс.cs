﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Soper
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Рейс.
    /// </summary>
    // *** Start programmer edit section *** (Рейс CustomAttributes)

    // *** End programmer edit section *** (Рейс CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("РейсE", new string[] {
            "Куда as \'Куда\'",
            "Откуда as \'Откуда\'",
            "Дата as \'Дата\'",
            "ВремяОтпр as \'Время отправления\'",
            "НачПосад as \'Начало посадки\'",
            "КонецПосад as \'Конец посадки\'",
            "Выход as \'Выход\'"})]
    [AssociatedDetailViewAttribute("РейсE", "ИнфБронь", "ИнфБроньE", true, "", "Информация бронирования", true, new string[] {
            ""})]
    [View("РейсL", new string[] {
            "Куда as \'Куда\'",
            "Откуда as \'Откуда\'",
            "Дата as \'Дата\'",
            "ВремяОтпр as \'Время отправления\'",
            "НачПосад as \'Начало посадки\'",
            "КонецПосад as \'Конец посадки\'",
            "Выход as \'Выход\'"})]
    public class Рейс : ICSSoft.STORMNET.DataObject
    {
        
        private string fКуда;
        
        private string fОткуда;
        
        private System.DateTime fДата;
        
        private string fВремяОтпр;
        
        private string fНачПосад;
        
        private string fКонецПосад;
        
        private string fВыход;
        
        private IIS.Soper.DetailArrayOfИнфБронь fИнфБронь;
        
        // *** Start programmer edit section *** (Рейс CustomMembers)

        // *** End programmer edit section *** (Рейс CustomMembers)

        
        /// <summary>
        /// ВремяОтпр.
        /// </summary>
        // *** Start programmer edit section *** (Рейс.ВремяОтпр CustomAttributes)

        // *** End programmer edit section *** (Рейс.ВремяОтпр CustomAttributes)
        [StrLen(255)]
        public virtual string ВремяОтпр
        {
            get
            {
                // *** Start programmer edit section *** (Рейс.ВремяОтпр Get start)

                // *** End programmer edit section *** (Рейс.ВремяОтпр Get start)
                string result = this.fВремяОтпр;
                // *** Start programmer edit section *** (Рейс.ВремяОтпр Get end)

                // *** End programmer edit section *** (Рейс.ВремяОтпр Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Рейс.ВремяОтпр Set start)

                // *** End programmer edit section *** (Рейс.ВремяОтпр Set start)
                this.fВремяОтпр = value;
                // *** Start programmer edit section *** (Рейс.ВремяОтпр Set end)

                // *** End programmer edit section *** (Рейс.ВремяОтпр Set end)
            }
        }
        
        /// <summary>
        /// Выход.
        /// </summary>
        // *** Start programmer edit section *** (Рейс.Выход CustomAttributes)

        // *** End programmer edit section *** (Рейс.Выход CustomAttributes)
        [StrLen(255)]
        public virtual string Выход
        {
            get
            {
                // *** Start programmer edit section *** (Рейс.Выход Get start)

                // *** End programmer edit section *** (Рейс.Выход Get start)
                string result = this.fВыход;
                // *** Start programmer edit section *** (Рейс.Выход Get end)

                // *** End programmer edit section *** (Рейс.Выход Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Рейс.Выход Set start)

                // *** End programmer edit section *** (Рейс.Выход Set start)
                this.fВыход = value;
                // *** Start programmer edit section *** (Рейс.Выход Set end)

                // *** End programmer edit section *** (Рейс.Выход Set end)
            }
        }
        
        /// <summary>
        /// Дата.
        /// </summary>
        // *** Start programmer edit section *** (Рейс.Дата CustomAttributes)

        // *** End programmer edit section *** (Рейс.Дата CustomAttributes)
        public virtual System.DateTime Дата
        {
            get
            {
                // *** Start programmer edit section *** (Рейс.Дата Get start)

                // *** End programmer edit section *** (Рейс.Дата Get start)
                System.DateTime result = this.fДата;
                // *** Start programmer edit section *** (Рейс.Дата Get end)

                // *** End programmer edit section *** (Рейс.Дата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Рейс.Дата Set start)

                // *** End programmer edit section *** (Рейс.Дата Set start)
                this.fДата = value;
                // *** Start programmer edit section *** (Рейс.Дата Set end)

                // *** End programmer edit section *** (Рейс.Дата Set end)
            }
        }
        
        /// <summary>
        /// КонецПосад.
        /// </summary>
        // *** Start programmer edit section *** (Рейс.КонецПосад CustomAttributes)

        // *** End programmer edit section *** (Рейс.КонецПосад CustomAttributes)
        [StrLen(255)]
        public virtual string КонецПосад
        {
            get
            {
                // *** Start programmer edit section *** (Рейс.КонецПосад Get start)

                // *** End programmer edit section *** (Рейс.КонецПосад Get start)
                string result = this.fКонецПосад;
                // *** Start programmer edit section *** (Рейс.КонецПосад Get end)

                // *** End programmer edit section *** (Рейс.КонецПосад Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Рейс.КонецПосад Set start)

                // *** End programmer edit section *** (Рейс.КонецПосад Set start)
                this.fКонецПосад = value;
                // *** Start programmer edit section *** (Рейс.КонецПосад Set end)

                // *** End programmer edit section *** (Рейс.КонецПосад Set end)
            }
        }
        
        /// <summary>
        /// Куда.
        /// </summary>
        // *** Start programmer edit section *** (Рейс.Куда CustomAttributes)

        // *** End programmer edit section *** (Рейс.Куда CustomAttributes)
        [StrLen(255)]
        public virtual string Куда
        {
            get
            {
                // *** Start programmer edit section *** (Рейс.Куда Get start)

                // *** End programmer edit section *** (Рейс.Куда Get start)
                string result = this.fКуда;
                // *** Start programmer edit section *** (Рейс.Куда Get end)

                // *** End programmer edit section *** (Рейс.Куда Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Рейс.Куда Set start)

                // *** End programmer edit section *** (Рейс.Куда Set start)
                this.fКуда = value;
                // *** Start programmer edit section *** (Рейс.Куда Set end)

                // *** End programmer edit section *** (Рейс.Куда Set end)
            }
        }
        
        /// <summary>
        /// НачПосад.
        /// </summary>
        // *** Start programmer edit section *** (Рейс.НачПосад CustomAttributes)

        // *** End programmer edit section *** (Рейс.НачПосад CustomAttributes)
        [StrLen(255)]
        public virtual string НачПосад
        {
            get
            {
                // *** Start programmer edit section *** (Рейс.НачПосад Get start)

                // *** End programmer edit section *** (Рейс.НачПосад Get start)
                string result = this.fНачПосад;
                // *** Start programmer edit section *** (Рейс.НачПосад Get end)

                // *** End programmer edit section *** (Рейс.НачПосад Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Рейс.НачПосад Set start)

                // *** End programmer edit section *** (Рейс.НачПосад Set start)
                this.fНачПосад = value;
                // *** Start programmer edit section *** (Рейс.НачПосад Set end)

                // *** End programmer edit section *** (Рейс.НачПосад Set end)
            }
        }
        
        /// <summary>
        /// Откуда.
        /// </summary>
        // *** Start programmer edit section *** (Рейс.Откуда CustomAttributes)

        // *** End programmer edit section *** (Рейс.Откуда CustomAttributes)
        [StrLen(255)]
        public virtual string Откуда
        {
            get
            {
                // *** Start programmer edit section *** (Рейс.Откуда Get start)

                // *** End programmer edit section *** (Рейс.Откуда Get start)
                string result = this.fОткуда;
                // *** Start programmer edit section *** (Рейс.Откуда Get end)

                // *** End programmer edit section *** (Рейс.Откуда Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Рейс.Откуда Set start)

                // *** End programmer edit section *** (Рейс.Откуда Set start)
                this.fОткуда = value;
                // *** Start programmer edit section *** (Рейс.Откуда Set end)

                // *** End programmer edit section *** (Рейс.Откуда Set end)
            }
        }
        
        /// <summary>
        /// Рейс.
        /// </summary>
        // *** Start programmer edit section *** (Рейс.ИнфБронь CustomAttributes)

        // *** End programmer edit section *** (Рейс.ИнфБронь CustomAttributes)
        public virtual IIS.Soper.DetailArrayOfИнфБронь ИнфБронь
        {
            get
            {
                // *** Start programmer edit section *** (Рейс.ИнфБронь Get start)

                // *** End programmer edit section *** (Рейс.ИнфБронь Get start)
                if ((this.fИнфБронь == null))
                {
                    this.fИнфБронь = new IIS.Soper.DetailArrayOfИнфБронь(this);
                }
                IIS.Soper.DetailArrayOfИнфБронь result = this.fИнфБронь;
                // *** Start programmer edit section *** (Рейс.ИнфБронь Get end)

                // *** End programmer edit section *** (Рейс.ИнфБронь Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Рейс.ИнфБронь Set start)

                // *** End programmer edit section *** (Рейс.ИнфБронь Set start)
                this.fИнфБронь = value;
                // *** Start programmer edit section *** (Рейс.ИнфБронь Set end)

                // *** End programmer edit section *** (Рейс.ИнфБронь Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "РейсE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View РейсE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("РейсE", typeof(IIS.Soper.Рейс));
                }
            }
            
            /// <summary>
            /// "РейсL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View РейсL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("РейсL", typeof(IIS.Soper.Рейс));
                }
            }
        }
    }
}
