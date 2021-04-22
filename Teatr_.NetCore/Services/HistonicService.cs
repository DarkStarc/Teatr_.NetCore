using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Teatr.Interfaces;
using Teatr.Models;

namespace Teatr.Services
{
    public class HistonicService
    {
        private readonly IUnitOfWork unitOfWork;
        public HistonicService(IUnitOfWork _unitOfWork)
        {
            this.unitOfWork = _unitOfWork;
        }

        public async Task<IEnumerable<Histonic>> GetWithTypeAsync(string typeHistonic, bool allInfo)
        {
            int TypeHistonicId = unitOfWork.TypeHistonicRepository.GetTypeWithName(typeHistonic).TypeHistonicId;

            if (allInfo)
            {
                return await unitOfWork.HistonicRepository.GetWithTypeAsync(TypeHistonicId);
            }
            else
            {
                return await unitOfWork.HistonicRepository.GetWithTypeAsync(TypeHistonicId, true);
            }

        }

        public async Task<Histonic> GetHistonicWithIdAsync(int id,bool allInfo)
        {
            if (allInfo == true)
            {
                return await unitOfWork.HistonicRepository.GetFullInfoAsync(id);
            }
            else
            {
                return await unitOfWork.HistonicRepository.GetAsync(id);
            }
        }
    }
}
